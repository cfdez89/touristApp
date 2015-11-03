/*
 *Tecnologico de Costa Rica
 *Administracion de proyectos
 *Carlos Fernandez Jimenez
 *Frontend for TuristShareApp
*/
 
 /*
 *Setter home controller 
 */
 
(function(){
	'use strict';
	angular
		.module('myTouristShare')
	    .controller('homeController', ['$scope','$location', function($scope, $location){
		
			$scope.viewRooms = function(){
				$location.path('/rooms').replace();
			};
			
		}]);	
})();