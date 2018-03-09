import angular from 'angular';

angular.module('authModule', [])
.service('authService', function() {
    let isLoggedIn = false;

    this.setIsLoggedIn = function(value) {
        localStorage.setItem('loggedIn', value ? '1' : '0');
        isLoggedIn = value;
    } 

    this.getIsLoggedIn = function() {
        let loggedIn = localStorage.getItem('loggedIn');
        return loggedIn && loggedIn == '1';
    }
});