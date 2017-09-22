angular.module('app')
.service('UsersService', ['$http', function($http) {

  var users = [
    {
      username: 'Bruce Wayne',
      id: 1
    },
    {
      username: 'Clark Kent',
      id: 2
    },
    {
      username: 'Bruce Banner',
      id: 3
    }
  ];

  return {
    users: users,
  };

}]);