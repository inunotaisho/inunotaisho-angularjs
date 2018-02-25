import angular from 'angular';
import authModule from '../authentication';

angular.module('login', ['authModule'])
.controller('loginCtrl', ($scope, $http, $location, authService) => {
        $scope.loginUser = function() {
            $http.post('/users/login', {
                username: $scope.username,
                password: $scope.password
            }).then(data => {
                if(data.status === 200) {
                    console.log(data);
                    authService.setIsLoggedIn(true);
                    $location.path('/#!/');
                }
            }).catch(error => {
                console.log(error);
                console.log('user not logged in');
                authService.setIsLoggedIn(false);
            })
        }
    
});