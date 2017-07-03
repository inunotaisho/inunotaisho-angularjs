import angular from 'angular';
import navbarCtrl from '../navbar/navbar.tc.js';

angular.module('navbar', ['navbarCtrl'])
.directive('navbar',() => {
return {
    restrict: 'E',
    templateUrl:'../src/views/navbar/navbar.tc.html',
    require:'^ngModel',
    controller:'navbarController'
    };
});

