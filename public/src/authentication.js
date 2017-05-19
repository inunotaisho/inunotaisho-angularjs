import angular from 'angular';

angular.module('authModule', [])
.service('authService', function() {
    let isLoggedIn = false;

    this.setIsLoggedIn = function(value) {
        isLoggedIn = value;
    } 

    this.getIsLoggedIn = function() {
        return isLoggedIn;
    }
});