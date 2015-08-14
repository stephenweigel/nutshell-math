myApp.controller('MathController', ['$scope', function($scope) {
	
	$scope.resetMainForm = function() {
		$scope.x = "";
		$scope.y = "";
		$scope.z = "";
	};

	// Addition

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

	// Subtraction

	$scope.subtraction = function(x,y) {
		return Number(x) - Number(y);
	};

	$scope.remainingBudget = function() {
		if ( $scope.expenses ) {
			var total = $scope.budget || 0;
			$.each($scope.expenses.split(' '), function() {
				total -= Number(this);
			});
			return total;
		} else {
			return 'How Much is Left';
		}
	};

	$scope.resetBudget = function() {
		$scope.expenses = "";
		$scope.budget = "";
	};

	// Multiplication

	$scope.multiply = function(x,y) {
		return Number(x) * Number(y);
	};
	
}]);