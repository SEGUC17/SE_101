var express = require('express');
var router = express.Router();
var auth = jwt({
  secret: 'secret',
  userProperty: 'payload'
});
var ctrlAuth = require('../controller/authentication');
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
module.exports = router;
