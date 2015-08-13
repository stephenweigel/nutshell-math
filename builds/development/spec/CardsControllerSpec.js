describe('MathController', function() {
    beforeEach(module('myApp'));

    var $controller, $scope, controller;

  beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  beforeEach(function(){
    $scope = {};  
    controller = $controller('MathController', { $scope: $scope });
  });

  // it('#', function() {
  //   expect(#).toBeTruthy();
  //   expect(#).toEqual(15);
  // });

});