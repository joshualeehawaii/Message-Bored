/*jshint esversion: 6 */
angular.module('app')
  .controller('LoginController',['$rootScope','$scope', 'LoginService', function($rootScope, $scope, LoginService) {
    $scope.checkUser = {
      name: ''
    };
    $scope.LoginService = LoginService;
    $scope.loginUser = () => {
      let username = $scope.checkUser.name;
      LoginService.loginUser(username);
      $scope.checkUser.name = '';
      $rootScope.loggedIn = true;
      console.log('user', username);
    };
  }]);