angular.module('app', ['ngRoute']);

angular.module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginController'
    })
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'RegisterController'
    })
    .when('/users', {
      templateUrl: 'users.html',
      controller: 'UsersController'
    })
    .when('/latest', {
      templateUrl: 'latest.html',
      controller: 'LatestController'
    })
    .otherwise({
      template: '<h1><center>404 Not Found</center></h1>'
    });

    $locationProvider.html5Mode(true);
  }]);