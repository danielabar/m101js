'use strict';

describe('Controller: Week2Ctrl', function () {

  // load the controller's module
  beforeEach(module('m101jsApp'));

  var Week2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Week2Ctrl = $controller('Week2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
