/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Frontend for TuristShareApp
*/
 
 /*
  *Setter modulos touristShare
 */
 angular
    .module('myTouristShare', [
        'ngResource',
        'ngRoute'
    ]);
    
 /*Routes setter
  *Define default routes for specified view
 */
(function(){
    'use strict'
    angular
        .module('myTouristShare')
        .config(function($locationProvider, $routeProvider){
            $locationProvider
                .html5Mode({
                    enabled: true,
                    requireBase: false
                });
            $routeProvider
                .when('/',{
                    templateUrl: 'views/home.html'
                })
                .when('/login',{
                    templateUrl: 'views/login.html'
                })
                .when('/rooms',{
                    templateUrl: 'views/rooms.html'
                })
                .when('/help',{
                    templateUrl: 'views/help.html'
                })
                .when('/about',{
                    templateUrl: 'views/about.html'
                })
                .otherwise({
                    redirectTo: 'views/login.html'
                });
        });	
})();