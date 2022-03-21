const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

router.route('/search').get((req, res) => {
    UserModel.find({},
        function(err, result){
            if(err) throw err
            else res.json(result)
    })
})

router.route('/delete/:id').delete((req,res) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log("User Deleted in the database");
            res.end();
        })
        .catch(error => console.log("Error"));
})


module.exports = router;