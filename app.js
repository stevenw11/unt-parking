// create the module and name it forumApp
// also include ngRoute for all our routing needs
var parkingApp = angular.module('parkingApp',['ngRoute']);

// configure our routes
parkingApp.config(function($routeProvider) {
	$routeProvider
	// route for the home page
    .when('/', {
		templateUrl : 'views/home/home.html',
		controller  : 'mainController',
	}) 
	// route for the lots page
	.when('/permits', {
		templateUrl : 'views/permits/permits.html',
		controller 	: 'permitsController',
	})
	// route for the lots page
	.when('/lots', {
		templateUrl : 'views/lots/lots.html',
		controller 	: 'lotController',
	})
	// route for the lots page
	.when('/spots', {
		templateUrl : 'views/spots/spots.html',
		controller 	: 'spotController',
	})
// we must add new routes with each page so here's a basic structure
// the html in a page would look like. . . 
// . . . <a href="#/<address>"> <page></a>  . . . .
// it is important to include the '#' symbol as this tells the js where to inject
// .when('/<address>', {
//     templateUrl : 'views/<path-to-html-file-you-want-to-use>',
//     controller : '<page>Controller'
// });

});

