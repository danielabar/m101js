'use strict';

describe('Controller: Week3Ctrl', function () {

  // load the controller's module
  beforeEach(module('m101jsApp'));

  var Week3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Week3Ctrl = $controller('Week3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
