import angular from 'angular';

angular.module('contact', [])
.controller('contactCtrl', ($scope, $http) => {

    function noName(){
        $http.get('/admin')
        .then(users => {
            console.log('rrrrrrrr', users);
            $scope.emails = users;
        }).catch(err => console.log('shit got real!!', err));
    }
});