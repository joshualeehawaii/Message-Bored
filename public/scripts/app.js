angular.module('app', ['ngRoute']);

angular.module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'homeController'
  })
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'loginController'
  })
  .when('/register', {
    templateUrl: 'register.html',
    controller: 'registerController'
  })
  .when('/users', {
    templateUrl: 'users.html',
    controller: 'usersController'
  });


  $locationProvider.html5Mode(true);

  }]);