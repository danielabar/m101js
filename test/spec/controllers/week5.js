'use strict';

describe('Controller: Week5Ctrl', function () {

  // load the controller's module
  beforeEach(module('m101jsApp'));

  var Week5Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Week5Ctrl = $controller('Week5Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
