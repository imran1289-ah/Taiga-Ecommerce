const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const auth = require('../auth');

router.route('/search').get((req, res) => {
    UserModel.find({},
        function(err, result){
            if(err) throw err
            else res.json(result)
    })
})

router.route('/ban/:id').delete((req,res) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log("User Deleted in the database");
            res.end();
        })
        .catch(error => console.log("Error"));
})

router.route('/update/:id').post((req,res) => {
    UserModel.findByIdAndUpdate(req.params.id)
        .then(user => {
            user.name = req.body.name
            user.email = req.body.email
            user.userType = req.body.userType
            
            user.save()
                .then(() => {
                    console.log("User was updated in the database");
                    res.end();
                })
                .catch(error => console.log(error));
            
        } )
        .catch(error => res.json("Error finding user"))
});

router.route('/updatePassword/:id').post((req,res) => {
    UserModel.findByIdAndUpdate(req.params.id)
        .then(user => {
            
            const saltAndHash = auth.generateNewPassword(req.body.hashedPassword);
            user.hashedPassword = saltAndHash.hash
            user.salt = saltAndHash.salt
            
            user.save()
                .then(() => {
                    console.log("User password was updated in the database");
                    res.end();
                })
                .catch(error => console.log(error));
            
        } )
        .catch(error => res.json("Error finding user"))
});




module.exports = router;