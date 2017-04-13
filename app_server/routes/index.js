var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var passport=require('passport');
var multiparty=require('multiparty');
var multer=require('multer');
var upload=multer({dest:'uploads/'});
var fs=require('fs');
var path=require('path');
var auth = jwt({
  secret: 'secret',
  userProperty: 'payload'
});//This will be used to pass token to profile

var ctrlAuth = require('../controller/authentication');
var ctrlProfile=require('../controller/profileController');
var ctrlUser=require('../controller/userController');
var ctrlAdmin=require('../controller/adminController');
var ctrlProduct=require('../controller/productController');
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.send('It worked! User id is: ' + req.user._id + '.');
});

router.get('/profile', passport.authenticate('jwt', { session: false }),ctrlProfile.viewProfile);
router.post('/editProfile', passport.authenticate('jwt', { session: false }),ctrlProfile.editProfile);
router.get('/selectPlan/:plan_id',ctrlUser.selectPlan);
router.post('/addPlan',ctrlAdmin.addPlan);
router.post('/addProduct',ctrlAdmin.addProduct);
router.put('/editProduct',ctrlAdmin.editProduct);
router.post('/addSponserAd',upload.single('img'),ctrlAdmin.addSponserAd);
router.get('/products',ctrlProduct.getProducts);
router.put('/products',ctrlProduct.addProduct);
router.get('/products/cart',ctrlProduct.viewCart);
router.put('/products/cart',ctrlProduct.removeFromCart);
router.all('/products/invoice', ctrlProduct.checkout);
router.get('profile/viewHistory', ctrlUser.viewHistory);
router.get('/products',ctrlUser.viewProducts);
router.get('/plans',ctrlUser.viewPlan);

module.exports =router;
