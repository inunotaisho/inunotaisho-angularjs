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
import '../authentication.js';
import homeTemplate from '../home/home.vc.html';
import educationTemplate from '../education/ed.vc.html';
import portfolioTemplate from '../portfolio/portfolio.vc.html';
import blogTemplate from '../blog/blog.vc.html';
import loginTemplate from '../login/login.vc.html';
import profileTemplate from '../profile/profile.vc.html';
import writeTemplate from '../write/write.vc.html';
import contactTemplate from '../contact/contact.vc.html';
import regTemplate from '../reg/reg.vc.html';

 angular.module('myApp', ['ngRoute', 'ngResource','navbar','blog','login','profile','write','contact','reg','authModule'])
    .config(($routeProvider, $locationProvider) => {
        $routeProvider
        .when('/', {
            template: homeTemplate
        })
        .when('/education', {
            template: educationTemplate 
        }).when('/portfolio', {
            template: portfolioTemplate
        })
        .when('/blog', {
            template: blogTemplate,
            controller: 'blogCtrl',
            controllerUrl: '../blog/blog.vc.js'
        })
        .when('/login', {
            template: loginTemplate,
            controller:'loginCtrl',
            controllerUrl:'../login/login.vc.js',
            isLogin: true
        })
        .when('/profile', {
            template: profileTemplate,
            controller:'profileCtrl',
            controllerUrl:'../profile/profile.vc.js',
            isLogin: true
        })
        .when('/write', {
            template: writeTemplate,
            controller:'writeCtrl',
            controllerUrl:'../write/write.vc.js',
            isLogin: true
        })
        .when('/contact', {
            template: contactTemplate,
            controller: 'contactCtrl',
            controllerUrl: '../contact/contact.vc.js'
        })
        .when('/registration',{
            template: regTemplate,
            controller: 'regCtrl',
            controllerUrl:'../reg/reg.vc.js'
        })
        .otherwise({
            redirectTo: '/'
        });
    });