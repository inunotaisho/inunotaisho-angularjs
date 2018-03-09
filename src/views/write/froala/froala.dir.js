import angular from 'angular';
import froalaCtrl from './froala.vc';
import froalaTemplate from './froala.vc';

angular.module('editor', ['froalaCtrl'])
.directive('editor',() => {
return {
    restrict: 'E',
    template: froalaTemplate,
    require:'^ngModel',
    controller:'navbarController'
    };
});