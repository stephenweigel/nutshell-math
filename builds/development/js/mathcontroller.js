myApp.controller('MathController', ['$scope', function($scope) {
	$scope.addition = function(x,y) {
		return Number(x) + Number(y);
	};

	$scope.addMultiple = function() {
		if ( $scope.xx ) {
			var total = 0;
			$.each($scope.xx.split(' '), function() {
				total += Number(this);
			});
			return total;
		} else {
			return 'Answer';
		}
	};

	$scope.resetMainForm = function() {
		$scope.x = "";
		$scope.y = "";
		$scope.z = "";
	};
}]);