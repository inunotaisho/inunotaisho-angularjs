import angular from 'angular';

angular.module('navbarCtrl', [])
.controller('navbarController', ($scope, $http) => {
    
    $scope.isUserLoggedIn = true; 
});