import angular from 'angular';

angular.module('reg', [])
.controller('regCtrl', ($scope, $http) => {
    $scope.register = function() {
        $http.post('/users/register', $scope.user).then(response => {
            if(response.status === 200) {
                console.log(response);
            } else {
                console.log(response);
            }
        })
    }
});