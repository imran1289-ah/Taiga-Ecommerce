const ProductModel = require('../models/products');

exports.createProduct = function (req, res) {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const image = req.body.image;
  const stock = req.body.stock;
  const categories = req.body.categories;
  const user = req.body.user;

  const NewProduct = new ProductModel({ name, description, price, image, stock, categories, user });

  NewProduct.save()
    .then(() => {
      console.log('Product was sucessful added');
      res.end();
    })
    .catch(error => console.log(error));
};

exports.updateProduct = function (req, res) {
  ProductModel.findByIdAndUpdate(req.params.id)
    .then(product => {
      product.name = req.body.name;
      product.description = req.body.description;
      product.price = req.body.price;
      product.image = req.body.image;
      product.stock = req.body.stock;
      product.categories = req.body.categories;
      product.user = req.body.user;

      product.save()
        .then(() => {
          console.log('Product was updated in the database');
          res.end();
        })
        .catch(error => console.log(error));
    })
    .catch(error => res.json('Error finding product'));
};

exports.deleteProduct = function (req, res) {
  ProductModel.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Product Deleted in the database');
      res.end();
    })
    .catch(error => console.log('Error'));
};

exports.removeFromCart = function (req, res) {
  ProductModel.findById(req.params.id)
    .then(product => {
      const index = product.inUserCart.indexOf(req.body.myUserId);
      if (index > -1) {
        product.inUserCart.splice(index, 1); // 2nd parameter means remove one item only
      }
      product.save()
        .then(() => console.log('Product removed and was updated in the database'))
        .catch(error => console.log(error));
    })
    .catch(error => res.json('Error finding product'));
};

exports.removeFromHistory = function (req, res) {
  ProductModel.findById(req.params.id)
    .then(product => {
      const index = product.inUserHistory.indexOf(req.body.myUserId);
      if (index > -1) {
        product.inUserHistory.splice(index, 1); // 2nd parameter means remove one item only
      }
      product.save()
        .then(() => console.log('Product removed from history and was updated in the database'))
        .catch(error => console.log(error));
    })
    .catch(error => res.json('Error finding product'));
};

exports.addToCart = function (req, res) {
  console.log('Adding to cart');
  ProductModel.findByIdAndUpdate(req.params.id)
    .then(product => {
      product.inUserCart.push(req.body.myUserId);
      product.save()
        .then(() => console.log('Product was updated in the database'))
        .catch(error => console.log(error));
    })
    .catch(error => res.json('Error finding product'));
};

exports.addToHistory = function (req, res) {
  console.log('Adding to history');
  ProductModel.findByIdAndUpdate(req.params.id)
    .then(product => {
      product.inUserHistory.push(req.body.myUserId);
      product.save()
        .then(() => console.log('Product was updated in the database'))
        .catch(error => console.log(error));
    })
    .catch(error => res.json('Error finding product'));
};

exports.getAllProducts = function (req, res) {
  ProductModel.find({}, function (err, result) {
    if (err) throw err;
    else res.json(result);
  });
};

exports.getUserCart = function (req, res) {
  ProductModel.find({ inUserCart: req.headers.myuserid }, function (err, result) {
    console.log('Products in cart of user with id: ' + req.headers.myuserid);
    if (err) throw err;
    else res.json(result);
    console.log(result);
  });
};

exports.getUserHistory = function (req, res) {
  ProductModel.find({ inUserHistory: req.headers.myuserid }, function (err, result) {
    console.log('Products in History of user with id: ' + req.headers.myuserid);
    if (err) throw err;
    else res.json(result);
    console.log(result);
  });
};
