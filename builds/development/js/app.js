var myApp = angular.module('myApp', ['ngRoute', 'myApp.directives']);

// Routes

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MathController'
		}).
		when('/addition', {
			templateUrl: 'views/addition.html',
			controller: 'MathController'
		}).
		when('/subtraction', {
			templateUrl: 'views/subtraction.html',
			controller: 'MathController'
		}).
		when('/multiplication', {
			templateUrl: 'views/multiplication.html',
			controller: 'MathController'
		}).
		when('/division', {
			templateUrl: 'views/division.html',
			controller: 'MathController'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);
