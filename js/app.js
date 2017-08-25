angular.module('App', ['ngRoute', 'App.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/link', {
        templateUrl: 'partials/link.html',
        controller: 'LinkController'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
