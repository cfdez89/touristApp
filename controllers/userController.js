/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *User controller module
*/

//'use strict'

/* import services modules */
var authService = require('../services/authService.js');

// import dependencies 
var userRepository = require('../repository/userRepository.js'),
    respObject     = require('../shared/response.js');

function getUser(request, response) {
    userRepository.getUserById({
        id:request.params.id
    }, function(success, data, code) {
        if(success) { 
            response.status(code);
            response.send(respObject.set(true, 'Success ', data)); 
        }
        else {
            response.status(code);
            response.send(respObject.set(false, 'Signup failed !', {}));
        }
    }); 

};

function signUp(request, response) {
    userRepository.createUser({
        name:request.body.name,
        lastName:request.body.lastName,
        username:request.body.username,
        password:request.body.password,
        phoneNumber:request.body.phoneNumber,
        facebookId:request.body.facebookId,
        email:request.body.email,
        userType:request.body.userType
    }, function(success, data, code) {
        if(success) { 
            var user = {id: data._id, username: data.username};
            response.status(code);
            response.send(respObject.set(true, 'Welcome '+user.username+'!', authService.newToken(user))); 
        }
        else {
            response.status(code);
            response.send(respObject.set(false, 'Signup failed !', {}));
        }
    });
};

function logIn(request, response) {
    var username = request.body.username;
    var password = request.body.password;

    //validar si existe el usuario en la bd
    // error de conexion 500
    //sino es valido error 404
    //si es exitoso 
    var user = {
        id: 0,
        username: request.body.username
    };
 
    response.status(200);
    response.send({token: authService.newToken(user)});

};

module.exports = {
    getUser: getUser,
    logIn: logIn,
    signUp: signUp
};