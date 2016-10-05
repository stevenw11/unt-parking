// create the controller and inject Angular's $scope
parkingApp.controller('mainController', function($scope, $http) {
// create a message to display in our view
$scope.message = 'Everyone come and see how good I look!';
$scope.dir = 'home';
});
// for each new page, a new controller is needed (maybe)
// default structure is
// forumApp.controller('<page>Controller', function($scope) {
//     $scope.<variable> = '<content>';
// });
// so the controller for the profile page would look like this
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
		console.log(page.substring(2));
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

parkingApp.filter('capitalize', function() {
	return function(input){
		return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	}
});
