import $ from 'jquery';
import bootstrap from 'bootstrap';
import angular from 'angular';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import navbar from '../src/views/navbar/navbar.dir.js';
import blog from '../src/views/blog/blog.vc';
import login from '../src/views/login/login.vc';
import write from '../src/views/write/write.vc';
import contact from '../src/views/contact/contact.vc';
import reg from '../src/views/reg/reg.vc';

angular.module('myApp', ['ngRoute', 'ngResource','navbar','blog','login','write','contact','reg'])
.config(($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: '../src/views/home/home.vc.html'
    })
    .when('/education', {
        templateUrl: '../src/views/education/ed.vc.html'
    }).when('/projects', {
        templateUrl: '../src/views/projects/projects.vc.html'
    })
    .when('/blog', {
        templateUrl:'../src/views/blog/blog.vc.html',
        controller: 'blogCtrl',
        controllerUrl: '../src/views/blog/blog.vc.js'
    })
    .when('/login', {
        templateUrl:'../src/views/login/login.vc.html',
        controller:'loginCtrl',
        controllerUrl:'../src/views/login/login.vc.js',
        isLogin: true
    })
    .when('/write', {
        templateUrl:'../src/views/write/write.vc.html',
        controller:'writeCtrl',
        controllerUrl:'../src/views/write/write.vc.js'
    })
    .when('/contact', {
        templateUrl:'../src/views/contact/contact.vc.html',
        controller: 'contactCtrl',
        controllerUrl: '../src/views/contact/contact.vc.js'
    })
    /*.when('/registration',{
        templateUrl:'../../src/views/reg/reg.vc.html',
        controller: 'regCtrl',
        controllerUrl:'../../src/views/reg/reg.vc.js'
    })*/
    .otherwise({
        redirectTo: '/'
    });
});


angular.bootstrap(document, ['myApp']);

