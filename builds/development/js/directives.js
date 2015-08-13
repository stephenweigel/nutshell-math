// // Directives
angular.module('myApp.directives', []);
angular.module('myApp.directives')
.directive('nutshellHeader', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/header.html'
	};
})
.directive('nutshellFooter', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/footer.html'
	};
})
.directive('footerAddCalc', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/footer_add_calc.html'
	};
})
.directive('footerSubCalc', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/footer_sub_calc.html'
	};
})
.directive('footerMulCalc', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/footer_mul_calc.html'
	};
})
.directive('footerDivCalc', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/footer_div_calc.html'
	};
});