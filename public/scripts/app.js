angular.module('app', ['ngRoute']);

angular.module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .otherwise({
      template: '<h1><center>404 Not Found</center></h1>'
    });

    $locationProvider.html5Mode(true);
  }]);