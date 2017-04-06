var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
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
var ctrlProfile=requmodule.exports = router;ire('../controller/profileController');
var ctrlUser=require('../controller/userController');
var ctrlAdmin=require('../controller/adminController');
var ctrlProduct=require('/controller/productController');
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/profile',ctrlProfile.viewProfile);
router.post('/editProfile',ctrlProfile.editProfile);
router.get('/selectPlan/:plan_id',ctrlUser.selectPlan);
router.post('/addPlan',ctrlAdmin.addPlan);
router.post('/addProduct',ctrlAdmin.addProduct);
router.post('/addSponserAd',upload.single('img'),ctrlAdmin.addSponserAd);
router.put('/products',ctrlProduct.addProduct);
router.get('/products',ctrlProduct.getProducts);


module.exports =router;
