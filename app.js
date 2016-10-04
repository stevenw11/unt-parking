// create the module and name it forumApp
// also include ngRoute for all our routing needs
    var forumApp = angular.module('forumApp',['ngRoute']);

    // configure our routes
    forumApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'views/home/home.html',
                controller  : 'mainController',
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
