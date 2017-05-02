/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *Api routes module
*/

'use strict'

/* import express modules */
var express = require('express');

// import services modules
var userController = require('../controllers/userController.js'),
    auth           = require('../middleware/authentication.js');


module.exports.initialize = function(app) {
    var router = express.Router();
    
    app.get('/users/:id', auth.isAuth, userController.getUser);
    app.post('/signup', userController.signUp);
    app.post('/login', userController.logIn);
  
    
    //router.get('/ads', adsController.getAds);
    //router.post('/ad', adsController.newAd);
    
    app.use('/users/:id', router);
    app.use('/signup', router);
    app.use('/login', router);
   
   // app.use('/ad/:id', router);
   // app.use('/ads', router);

};