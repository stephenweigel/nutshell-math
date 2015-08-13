var myApp = angular.module('myApp', ['ngRoute', 'myApp.directives']);

// Routes

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MathController'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);
