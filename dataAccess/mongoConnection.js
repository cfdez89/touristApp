/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Backend for TuristShareApp
*/
//import dependences
var mongoose = require('mongoose'),
    urlDb    = require('./config'),
    Anuncio  = require('../models/anuncio.js'),
    Usuario  = require('../models/usuario.js'),
    Mensaje  = require('../models/mensaje.js');

//connected to database
mongoose.connect(urlDb.config.url+urlDb.config.dbName, function(err, res){
    if(err){
        console.log('Error connecting to Database. '+err);
    } 
    else{
        console.log('Connected to Database');
    }
});

//methods

//insert new user into database
exports.createUser = function(data, callback){
    var user = new Usuario(data);
    user.save(function(err, result){
  	    if(err){
  	        callback(false, null, 500);
  		} 
  		else{
  		    callback(true, result, null);
  		}
  	}); 
};

//verified user exists into database
exports.login = function(data, callback){
    Usuario.findOne({
        facebookId:data.facebookId
    }, function(err, result){
        if(err){
  	        console.log('ERROR: ' + err);
  	        callback(false, null, 500);
  		} 
  		else{
  		    callback(true, result, null);
  		}
  	});
};

//insert new ad into database
exports.createAd = function(data, callback){
    var anuncio = new Anuncio(data);
  	anuncio.save(function(err, result){
  	    if(err){
  	        console.log('ERROR: ' + err);
  	        callback(false, null, 500);
  		} 
  		else{
  		    callback(true, result, null);
  		}
  	});
}; 
//get all ads from database
//new RegExp("\/"+req.query.username+"\/")
exports.listMessage = function(data, callback){
    var tag= data.username;
    Anuncio.find({
        username: "/.*"+tag+".*/"
    }, function(err, result){
        if(err){
  	        console.log('ERROR: ' + err);
  	        callback(false, null, 500);
  		} 
  		else{
  		    callback(true, result, null);
  		}
  	});
};
//insert new message into database
exports.createMessage = function(data, callback){
    var mensaje = new Mensaje(data);
  	mensaje.save(function(err, result){
  	    if(err){
  	        console.log('ERROR: ' + err);
  	        callback(false, null, 500);
  		} 
  		else{
  		    callback(true, result, null);
  		}
  	});
};

//get all message from specified user into database
exports.listMessage = function(data, callback){
    Mensaje.find({
        username:data.username
    }, function(err, result){
        if(err){
  	        console.log('ERROR: ' + err);
  	        callback(false, null, 500);
  		} 
  		else{
  		    callback(true, result, null);
  		}
  	});
};

