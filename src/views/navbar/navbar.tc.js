import angular from 'angular';
import authModule from '../../services/authentication/authentication.js';

angular.module('navbarCtrl', ['authModule'])
.controller('navbarController', ($scope, $http, authService) => {
    $scope.isUserLoggedIn = function() {
        return authService.getIsLoggedIn();
    }

    $scope.logout = function() {
        $http.get('/logout').then(response => {
            if(response.status === 200) {
                authService.setIsLoggedIn(false);
            }
        });
    }
});