'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
<<<<<<< HEAD
=======

>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
<<<<<<< HEAD
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactUsCtrl'
      }).
=======
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01
      otherwise({
        redirectTo: '/phones'
      });
  }]);
