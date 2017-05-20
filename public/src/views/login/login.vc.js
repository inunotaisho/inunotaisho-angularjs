import angular from 'angular';
import authModule from '../../authentication';

angular.module('login', ['authModule'])
.controller('loginCtrl', ($scope, $http, $location, authService) => {
        $scope.loginUser = function() {
            $http.post('/users/login', {
                username: $scope.username,
                password: $scope.password
            }).then(data => {
                if(data.status === 200) {
                    console.log(data);
                    authService.setIsLoggedIn(true);
                    $location.path('/#!/');
                }
            }).catch(error => {
                console.log(error);
                console.log('user not logged in');
                authService.setIsLoggedIn(false);
            })
        }
    
});

/*angular.module('login').run(function ($location, $rootScope) {
    console.log('here');
    $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
        //$location.path('/login').replace();
    //if login required and you're logged out, capture the current path
        /*if (nextRoute.loginRequired && Account.loggedOut()) {
          postLogInRoute = $location.path();
          $location.path('/login').replace();
        } else if (postLogInRoute && Account.loggedIn()) {
    //once logged in, redirect to the last route and reset it
          $location.path(postLogInRoute).replace();
          postLogInRoute = null;
        }
    });
});*/