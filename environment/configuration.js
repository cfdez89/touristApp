/*
 *Tecnológico de Costa Rica
 *Project management course
 *Carlos Fernandez Jimenez
 *Tourist web page
 *Environment configuration module
*/

'use strict'

// import other modules 
var fs   = require('fs'),
    path = require('path');

//Constants
var FILE_CONFIG = 'configuration.json';

function readFile(fileConfig) {
    var filePath = path.join(__dirname, fileConfig);
    var file = fs.readFileSync(filePath);
    var config = {};

    try {
        config = JSON.parse(file);
    } 
    catch (err) {
        console.log(err);
    }
    return config;
};

function getDbSettings() {
    var settings = readFile(FILE_CONFIG);
    return settings.db;
};

function getSessionSettings() {
    var settings = readFile(FILE_CONFIG);
    return settings.security;
};

module.exports = {
    dbSettings: getDbSettings(),
    sessionSettings: getSessionSettings()
};