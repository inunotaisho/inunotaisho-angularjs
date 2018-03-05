import angular from 'angular';
import navbarCtrl from '../navbar/navbar.tc.js';
import navbarTemplate from '../navbar/navbar.tc.html';

angular.module('navbar', ['navbarCtrl'])
.directive('navbar',() => {
return {
    restrict: 'E',
    template: navbarTemplate,
    require:'^ngModel',
    controller:'navbarController'
    };
});

