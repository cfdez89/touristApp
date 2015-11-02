/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Backend for TuristShareApp
*/

//import dependences
var express       = require('express'),
    app           = express(),
    server        = require('http').createServer(app),
    bodyParser    = require('body-parser'),
    logic         = require('./datalogic/logic.js');
 
//configure the app
app.configure(function(){
    app.use(express.favicon());
    //bodyparser for handle request bodies
    app.use(bodyParser.urlencoded({ 
    	extended: true 
    }));
    
    app.use(bodyParser.json());
    //simulate delete and put http verbose
    app.use(express.methodOverride()); 
});
//running in development environment
app.configure('development', function(){
    app.use(express.errorHandler({ 
        dumpExceptions: true, showStack: true })); 
});
//running in production environment
app.configure('production', function(){
    app.use(express.errorHandler()); 
});

//routes
app.use('/', express.static(__dirname + '/presentation/views'));
//send the main page 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/presentation/views/index.html');
});

/*
 *method:post
 *inputs:name, lastname, username, phoneNumber, facebookId, email, userType
 *outputs:true or false
 *description: register new user (huesped)
*/
app.post('/users', logic.createUser);
/*
 *method:post
 *inputs:facebookId
 *outputs:true or false
 *description: validate user exists
*/
app.post('/login', logic.login);
/*
 *method:post
 *inputs: username, tipo alojamiento, tipo de habitacion, ciudad, 
 *capacidad, idioma, precioxnoche, precioxdia, fotografia
 *localizacon(latitud, longitud, grados)
 *outputs:true or false
 *description: created ad
*/
app.post('/Ads', logic.createAd);
/*
 *method:post
 *inputs: username, emisor, comentario, fecha
 *outputs:true or false
 *description: created message
*/
app.post('/Messages', logic.createMessage);
/*
 *method:get
 *inputs: username
 *outputs:messages
 *description:message list from particular user
*/
app.get('/Messages', logic.listMessage);

server.listen(process.env.PORT || 8080, function(){
	console.log('Listening at port 8080...');
});

//global variables for administration clients
var usersConnected = [];
var adminConnected = [];