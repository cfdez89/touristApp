/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *ViewModel response object 
*/

'use strict'

function set(success, message, data){
    return JSON.stringify({
        success: success,
        message: message,
        data: data
    });
};

module.exports = {
    set: set
};