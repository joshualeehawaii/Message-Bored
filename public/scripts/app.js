angular.module('app', ['ngRoute']);

angular.module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'homeController'
  });


  $locationProvider.html5Mode(true);

  }]);