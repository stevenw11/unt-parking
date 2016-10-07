// create the controller and inject Angular's $scope
parkingApp.controller('mainController', function($scope, $http) {
	$scope.dir = 'home';
});
// for each new page, a new controller is needed (maybe)
// default structure is
// forumApp.controller('<page>Controller', function($scope) {
//     $scope.<variable> = '<content>';
// });

parkingApp.controller('permitsController', function($scope, $http) {
	$scope.dir = 'permits';
	$scope.dir = 'lots';
	// Create a local instance
	var tb = this;
	tb.table = [];

	// Get the database 
	$http.get('/database/permits/permitsdatabase.json')
		.then(function(result) {
			var i;
			// grab each element in the data object
			for( i = 0; i < result.data.length; i++){
				tb.table.push(result.data[i]);		//  grab the DATABASE
				//console.log(tb.table[i]);
				//console.log(result.data[i]);
			}
	});
	
	// Assign the database to the $scope (so it can be used in HTML)
	$scope.permits = tb.table;
});


// Get the General Database
parkingApp.controller('lotController', function($scope, $http) {
	$scope.dir = 'lots';
	// Create a local instance
	var tb = this;
	tb.table = [];

	// Get the database 
	$http.get('/database/lots/lotdatabase.json')
		.then(function(result) {
			var i;
			// grab each element in the data object
			for( i = 0; i < result.data.length; i++){
				tb.table.push(result.data[i]);		//  grab the DATABASE
				//console.log(tb.table[i]);
				//console.log(result.data[i]);
			}
	});
	
	// Assign the database to the $scope (so it can be used in HTML)
	$scope.lots = tb.table;
});

// Spot Controller function
parkingApp.controller('spotController', function($scope, $http) {
	$scope.dir = 'spots';
	// Create a local instance
	var tb = this;
	tb.table = [];

	// Get the database 
	$http.get('/database/spots/spotdatabase.json')
		.then(function(result) {
			var i;
			// grab each element in the data object
			for( i = 0; i < result.data.length; i++){
				tb.table.push(result.data[i]);		//  grab the DATABASE
				//console.log(tb.table[i]);
				//console.log(result.data[i]);
			}
	});
	
	// Assign the database to the $scope (so it can be used in HTML)
	$scope.spots = tb.table;

});

parkingApp.filter('capitalize', function() {
	return function(input){
		return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	}
});

parkingApp.controller('navController', function($scope) {
	// get starting value of nav
	var URL = window.location.href;

	// if page is not initialized, ie .match failed, we will set
	// to home (done below) since the only way for that to occur is if
	// we go directly to the url only.
	var page = URL.match(/(#\/)\w*/);

	// test to see if page is not null, if so we set 
	if( page != null ){
		var page = page[0];
		var len = page.length;
		// set starting value for use
		if( !page.substring(2))
			$scope.nav = 'home';
		else
			$scope.nav = page.substring(2);
	}
	else	// the page variable was not initialized, so fall back to home.
		$scope.nav = 'home';

	// Change current title and current navigation
	$scope.cNav = function( newNav ){
		$scope.nav = newNav;
}; 
});

