import angular from 'angular';

angular.module('login', [])
.controller('loginCtrl', ($scope, $http) => {
        /*$scope.loginUser = function() {
            $http.post('/users/login', {
                username: $scope.username,
                password: $scope.password
            }).then(data => {
                if(data.status === 200) {
                    console.log($scope);
                }
            }).catch(error => {
                console.log(error);
                console.log('user not logged in');
            })
        }*/
    
});