/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *Mongo data access
*/

'use strict'

//import dependences
var mongoose = require('mongoose'),
    config   = require('../environment/configuration.js'),
    User     = require('../models/user.js');

//connected to database
mongoose.connect(config.dbSettings.host, function(err, res){
    if(err){
        console.log('Error connecting to Database. '+err);
    } 
    else{
        console.log('Connected to Database');
    }
});

//insert new user into database
exports.createUser = function(data, callback){
    var user = new User(data);
    user.save(function(err, result){
  	    if(err){
  	        callback(false, null, 500);
  		} 
  		else{
  		    callback(true, result, 200);
  		}
  	}); 
};
