/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *Request authorization module
*/

'use strict'

// import other modules 
var jwt = require('jwt-simple');
var moment = require('moment');//date manager
var config = require('../environment/configuration.js');
var respObject = require('../shared/response.js');

//create new token
function newToken(user) {
    //transfer token data in headers
    var payload = {
        sub: user.id,//user id, in right way can be diferent from user db id//username
        iat: moment().unix(),// initialization datetime
        exp: moment().add(14, 'days').unix(),//expiration datetime
    };

    return jwt.encode(payload, config.sessionSettings.secret_word) 
};

//decode token
function decodeToken(token) {

    var decode = new Promise(function(resolve, reject) {

        try {
            var payload = jwt.decode(token, config.sessionSettings.secret_word);
            console.log(payload);
            if(payload.exp < moment().unix()) {
                var data = respObject.set(false, 'Token has expired', {})
                reject(data);//status 401
            }
            else {
                var data = respObject.set(true, 'Success', payload.sub); 
                resolve(data);
            }
        }
        catch(err) {
            var data = respObject.set(false, 'Token no valid', {}); 
            reject(data);//status 500
        }
    });
console.log(decode);
    return decode;
};

module.exports = {
    newToken: newToken,
    decodeToken: decodeToken
};
