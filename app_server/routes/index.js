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
var ctrlChat = require('../controller/chatController');
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.send('It worked! User id is: ' + req.user._id + '.');
});

router.get('/profile', passport.authenticate('jwt', { session: false }),ctrlProfile.viewProfile);
router.post('/editProfile', passport.authenticate('jwt', { session: false }),ctrlProfile.editProfile);
router.post('/selectPlan',passport.authenticate('jwt', { session: false }),ctrlUser.selectPlan);
router.post('/addPlan',passport.authenticate('jwt', { session: false }),ctrlAdmin.addPlan);
router.post('/addProduct',passport.authenticate('jwt', { session: false }),ctrlAdmin.addProduct);
router.put('/editProduct',passport.authenticate('jwt', { session: false }),ctrlAdmin.editProduct);
router.put('/editPlan',passport.authenticate('jwt', { session: false }),ctrlAdmin.editPlan);
router.post('/addSponserAd',passport.authenticate('jwt', { session: false }),upload.single('img'),ctrlAdmin.addSponserAd);
router.put('/editSponserAd',passport.authenticate('jwt', { session: false }),upload.single('img'),ctrlAdmin.editSponserAd);
router.delete('/deletePlan',passport.authenticate('jwt', { session: false }),ctrlAdmin.deletePlan);
router.delete('/deleteProduct',passport.authenticate('jwt', { session: false }),ctrlAdmin.deleteProduct);
router.delete('/deleteSponserAd',passport.authenticate('jwt', { session: false }),ctrlAdmin.deleteSponserAd);
router.delete('/deleteUser',passport.authenticate('jwt', { session: false }),ctrlAdmin.deleteUser);
//router.get('/products',ctrlProduct.getProducts);
router.post('/deleteUser',passport.authenticate('jwt', { session: false }),ctrlAdmin.deleteUser);
router.get('/viewUsers',passport.authenticate('jwt', { session: false }),ctrlAdmin.viewUsers);
router.post('/addproducts',passport.authenticate('jwt', { session: false }),ctrlProduct.addProduct);
router.get('/products/cart',passport.authenticate('jwt', { session: false }),ctrlProduct.viewCart);
router.put('/products/cart',passport.authenticate('jwt', { session: false }),ctrlProduct.removeFromCart);
router.post('/charge',passport.authenticate('jwt', { session: false }),ctrlProduct.charge);
router.get('profile/viewHistory',passport.authenticate('jwt', { session: false }), ctrlUser.viewHistory);
router.get('/products',ctrlUser.viewProducts);
router.get('/plans',ctrlUser.viewPlan);
router.post('/user/chat:id', ctrlChat.userChat);
router.get('/user/chat:id', ctrlChat.userChatget);
router.post('/admin/chat:id:admin', ctrlChat.adminChat)
router.get('/admin/chat:id:admin', ctrlChat.adminChatget)
router.get('/admin/chat:admin', ctrlChat.adminChatgetAll);

module.exports =router;
