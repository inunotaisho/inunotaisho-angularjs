import $ from 'jquery';
import bootstrap from 'bootstrap';
import angular from 'angular';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import froala from 'angular-froala';
import blog from '../blog/blog.vc';
import errors from '../error/error.vc';
import navbar from '../navbar/navbar.dir.js';
import editor from '../write/froala/froala.dir';
import login from '../login/login.vc';
import profile from '../profile/profile.vc.js';
import write from '../write/write.vc';
import contact from '../contact/contact.vc';
import reg from '../reg/reg.vc';
import authModule from '../../services/authentication/authentication.js';
import homeTemplate from '../home/home.vc.html';
import educationTemplate from '../education/ed.vc.html';
import errorTemplate from '../error/error.vc.html';
import portfolioTemplate from '../portfolio/portfolio.vc.html';
import blogTemplate from '../blog/blog.vc.html';
import loginTemplate from '../login/login.vc.html';
import profileTemplate from '../profile/profile.vc.html';
import writeTemplate from '../write/write.vc.html';
import contactTemplate from '../contact/contact.vc.html';
import regTemplate from '../reg/reg.vc.html';

 angular.module('myApp', ['ngRoute', 'ngResource','navbar','errors', 'editor','blog','login','profile','write','contact','reg','authModule', 'froala'])
    .value('froalaConfig', {
        toolbarInline: false,
        placeholderText: 'Enter Text Here'
    })
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
            resolve : {
                //This function is injected with the AuthService where you'll put your authentication logic
                'auth' : function(AuthService){
                    return AuthService.authenticate();
                }
            }
        })
        .when('/write', {
            template: writeTemplate,
            controller:'writeCtrl',
            controllerUrl:'../write/write.vc.js',
            resolve : {
                //This function is injected with the AuthService where you'll put your authentication logic
                'auth' : function(AuthService){
                    return AuthService.authenticate();
                }
            }
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
        .when('/error',{
            template: errorTemplate,
            controller: 'errorCtrl',
            controllerUrl: '../error/error.vc.js'
        })
        .otherwise({
            redirectTo: '/'
        });
    }).run(function($rootScope, $location){
        //If the route change failed due to authentication error, redirect them out
        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
            if(rejection === 'Not Authenticated'){
                console.log('Zombie, I\'m here')
                $location.path('/login');
            }
        })
    }).factory('AuthService', function($q, authService){
        return {
            authenticate : function(){
                //Authentication logic here
                if(authService.getIsLoggedIn()){
                    //If authenticated, return anything you want, probably a user object
                    return true;
                } else {
                    //Else send a rejection
                    return $q.reject('Not Authenticated');
                }
            }
        }
    });