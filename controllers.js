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
});


// Get the General Database
parkingApp.controller('lotController', function($scope, $http) {
	$scope.dir = 'lots';
	$scope.table = [
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"001","Spots":"60","Total":"120","Open":"true"},
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"002","Spots":"53","Total":"120","Open":"true"},
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"003","Spots":"24","Total":"120","Open":"true"},
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"004","Spots":"55","Total":"120","Open":"true"},
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"005","Spots":"0","Total":"120","Open":"false"},
	];

	function getStatus( t ){
		var i;
		for( i=0; i < t.length() ; i++ ){
			if( t[i].Spots=='0' ){
				t[i].Open = false;
			}
			else{
				t[i].Open = true;
			}
		}
	}

	function isOpen( t ){
		if( t.Spots=='0' ){
			t.Open = false;
		}
		else{
			t.Open = true;
		}
	}


});

// Spot Controller function
parkingApp.controller('spotController', function($scope, $http) {
	$scope.dir = 'spots';
	$scope.table = [
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"001","Spot":"001","Open":"true"},
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"001","Spot":"002","Open":"false"},
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"001","Spot":"003","Open":"false"},
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"001","Spot":"004","Open":"true"},
		{"Campus":"Discovery Park","Permit":"Eagle","Lot":"001","Spot":"005","Open":"false"}
	];
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

