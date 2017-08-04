'use strict';

// describe('myApp.view3 module', function() {

//   beforeEach(module('myApp.view3'));

//   describe('view3 controller', function(){

//     it('should ....', inject(function($controller) {
//       //spec body
//       var view3Ctrl = $controller('view3Ctrl');
//       expect(view3Ctrl).toBeDefined();
//     }));

//   });
// });

describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(3);
  }));

});