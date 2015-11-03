/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Frontend for TuristShareApp
*/
 
 /*
 *Setter index controller
 */
 
(function(){
	'use strict';
	angular
		.module('myTouristShare')
	    .controller('indexController', ['$scope','$location', function($scope, $location){
		
			$scope.viewRooms = function(){
				$location.path('/rooms').replace();
			};
				
			$scope.viewHelp = function(){
				$location.path('/help').replace();
			};

			$scope.viewAbout = function(){
				$location.path('/about').replace();
			};

			$scope.viewLogin = function(){
				$location.path('/login').replace();
			};
		}]);	
})();