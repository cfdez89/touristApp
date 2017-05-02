/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *Api controller module
*/

'use strict'

// import express modules
var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    app     = express();

// import other modules 
var favicon        = require('serve-favicon'),
    methodOverride = require('method-override'),
    bodyParser 	   = require('body-parser'),
    errorHandler   = require('errorhandler');

// import dependencies 
var routes = require('./routes/routes.js');

// app configuration 
app.set('port', process.env.PORT || 3000);

//app.set('views', path.join(__dirname, '/client/views'));
//app.use(favicon(__dirname + '/client/public/images/favicon.ico'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true 
}));
//app.use(express.static(path.join(__dirname, 'client')));

// Error handling, running in development environment 
if ('development' == app.get('env')) {
	app.use(errorHandler({
  	    dumpExceptions: true, 
  	    showStack: true
    }));
}

// Error handling, running in production environment 
if ('production' == app.get('env')) {
	app.use(errorHandler());
}

// Define routes to access api
routes.initialize(app);

// Server created 
var server = http.createServer(app);

// Server listener starts here 
server.listen(app.get('port'), function(){
	console.log('Listening at port '+app.get('port'));
});

