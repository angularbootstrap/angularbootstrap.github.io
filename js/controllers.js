angular.module('App.controllers', [])
    .controller('HomeController', ['$scope','$http','$route','$window', function ($scope,$http,$route,$window) {
      $scope.process = false;
      $scope.sometextinprocess = '';
      $scope.go2db = function (){
        $scope.sometextinprocess = $('#sometext').val();
        $scope.process = true;
      }

    }])
    .controller('LinkController', ['$scope','$routeParams','$http', function ($scope,$routeParams,$http) {
      //Hit your backend server, using below code and then push the data to angularjs variable eg. line 19
      $http({
        url: '<Your REST server endpoint goes here>',
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        //REST call's json input goes below
        data: JSON.stringify({user: { uid:'1'},access_token:'some input'})
      }).success(function (data) {
        console.log(data);
      }).error(function (data) {
        console.log(data);
      });
      $scope.angledvariable = "hello from the other side :)";
    }]);
