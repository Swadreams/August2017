'use strict';

angular.module('phonecatApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phoneCatView', {
    templateUrl: 'phoneCatView/phoneCat.html',
    //controller: 'PhoneListController'
  });
}]);

// .controller('PhoneListController', function PhoneListController($scope) {
//   $scope.phones = [
//     {
//       name: 'Nexus S',
//       snippet: 'Fast just got faster with Nexus S.'
//     }, {
//       name: 'Motorola XOOM™ with Wi-Fi',
//       snippet: 'The Next, Next Generation tablet.'
//     }, {
//       name: 'MOTOROLA XOOM™',
//       snippet: 'The Next, Next Generation tablet.'
//     }
//   ];
// });