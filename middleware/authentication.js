/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *Request authentication module
*/

'use strict'

var authService = require('../services/authService.js');
var respObject = require('../shared/response.js');

function isAuth(request, response, next) {
    if(request.headers && request.headers.authorization) {
        
        var token = request.headers.authorization.split(' ')[1];

        authService.decodeToken(token).then(function(resp){
            request.user = resp;
            next();
        })   
        .catch(function(resp){
            var data = respObject.set(false, 'Internal error', {})
            response.status(403).send(data);//verificar codigo error
        })  
    }
    else {
        var data = respObject.set(false, 'Access denied', {})
        return response.status(403).send(data);
    }
}

module.exports = {
    isAuth: isAuth
};