// create the controller and inject Angular's $scope
parkingApp.controller('mainController', function( $rootScope, $scope, $http) {
	$scope.dir = 'home';
	// init once?
	$rootScope.status = {
		"Campus": "default",
		"Permit": "default",
		"Lot": "default",
		"Spot": "default"
	};

	$http.get("http://untparkingio.000webhostapp.com/database/getCampus.php")
	   .then(function (response) {
			$scope.campus = response.data.CampusDB;
	});

	// Assign the database to the $scope (so it can be used in HTML)
	//$scope.campus = tb.table;
	console.log("Status Home: " + $rootScope.status.Campus + " " + $rootScope.status.Permit + " " + $rootScope.status.Lot + " " + $rootScope.status.Spot);

});

// for each new page, a new controller is needed (maybe)
// default structure is
// forumApp.controller('<page>Controller', function($scope) {
//     $scope.<variable> = '<content>';
// });

parkingApp.controller('permitsController', function($rootScope,$scope, $http) {
	$scope.dir = 'permits';

	$http.get("http://untparkingio.000webhostapp.com/database/getPermits.php")
	   .then(function (response) {
			$scope.permit = response.data.PermitsDB;
	});

	console.log("Status Permit: " + $rootScope.status.Campus + " " + $rootScope.status.Permit + " " + $rootScope.status.Lot + " " + $rootScope.status.Spot);
});


// Get the General Database
parkingApp.controller('lotController', function( $rootScope, $scope, $http) {
	$scope.dir = 'lots';
	$http.get("http://untparkingio.000webhostapp.com/database/getLots.php")
	   .then(function (response) {
			$scope.lots = response.data.LotsDB;
	});

	// Assign the database to the $scope (so it can be used in HTML)
	//$scope.lots = tb.table;
	console.log("Status Lot: " + $rootScope.status.Campus + " " + $rootScope.status.Permit + " " + $rootScope.status.Lot + " " + $rootScope.status.Spot);
});

// Spot Controller function
parkingApp.controller('spotController', function($rootScope,$scope, $http) {
	$scope.dir = 'spots';

	$http.get("http://untparkingio.000webhostapp.com/database/getSpaces.php")
	   .then(function (response) {
			$scope.spots = response.data.SpacesDB;
	});
	// Assign the database to the $scope (so it can be used in HTML)
	//$scope.spots = tb.table;
	console.log("Status Spot: " + $rootScope.status.Campus + " " + $rootScope.status.Permit + " " + $rootScope.status.Lot + " " + $rootScope.status.Spot);

});


// test Controller function
parkingApp.controller('testController', function($rootScope,$scope, $http) {
	$scope.dir = 'test';
	$http.get("http://untparkingio.000webhostapp.com/database/printFullDB.php")
	   .then(function (response) {
			$scope.test = response.data.ParkingDB;
	});

       //added by Peter
       	$scope.Spot = '';
	$scope.Lot = '';
        $scope.Permit = '';

        $scope.displayInput = function(x) {
             //alert ('im here' + x);
             //alert (x.Spot + x.Lot + x.Permit);
              
            $scope.Lot = x.Lot;
              $scope.Permit = x.Permit ;
             var strUserInput = '<h2>LOT{{' +  x.Lot + '}}-{{' +  x.Space + ' }}</h4>' +
					'<h4>Permit: {{' +  x.Permit + '}}</h4>' ;

            if (x.isOpen == 1) 
                 strUserInput = strUserInput + '<h4>Vacant: Yes</h4>';
            else
                strUserInput = strUserInput + '<h4>Vacant: No</h4>';
                 

		alert (strUserInput);
	}

});	


parkingApp.filter('capitalize', function() {
	return function(input){
		return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	}
});


parkingApp.controller('navController', function($rootScope,$scope, $http) {


});
