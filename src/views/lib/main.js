import $ from 'jquery';
import bootstrap from 'bootstrap';
import angular from 'angular';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import navbar from '../navbar/navbar.dir.js';
import blog from '../blog/blog.vc';
import login from '../login/login.vc';
import profile from '../profile/profile.vc.js';
import write from '../write/write.vc';
import contact from '../contact/contact.vc';
import reg from '../reg/reg.vc';


 var app = angular.module('myApp', ['ngRoute', 'ngResource','navbar','blog','login','profile','write','contact','reg'])
    .config(($routeProvider, $locationProvider) => {
        $routeProvider
        .when('/', {
            templateUrl: '../home/home.vc.html'
        })
        .when('/education', {
            templateUrl: '../education/ed.vc.html'
        }).when('/projects', {
            templateUrl: '../projects/projects.vc.html'
        })
        .when('/blog', {
            templateUrl:'../blog/blog.vc.html',
            controller: 'blogCtrl',
            controllerUrl: '../blog/blog.vc.js'
        })
        .when('/login', {
            templateUrl:'../login/login.vc.html',
            controller:'loginCtrl',
            controllerUrl:'../login/login.vc.js',
            isLogin: true
        })
        .when('/profile', {
            templateUrl:'../profile/profile.vc.html',
            controller:'profileCtrl',
            controllerUrl:'../profile/profile.vc.js',
            isLogin: true
        })
        .when('/write', {
            templateUrl:'../write/write.vc.html',
            controller:'writeCtrl',
            controllerUrl:'../write/write.vc.js',
            isLogin: true
        })
        .when('/contact', {
            templateUrl:'../contact/contact.vc.html',
            controller: 'contactCtrl',
            controllerUrl: '../contact/contact.vc.js'
        })
        .when('/registration',{
            templateUrl:'../reg/reg.vc.html',
            controller: 'regCtrl',
            controllerUrl:'../reg/reg.vc.js'
        })
        .otherwise({
            redirectTo: '/'
        });
    });