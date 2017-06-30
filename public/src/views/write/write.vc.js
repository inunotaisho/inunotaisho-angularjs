import angular from 'angular';

angular.module('write',[])
.controller('writeCtrl', ($scope, $http) => {
    $scope.submitBlog = function() {
        $http.post('/blog')
        .then(post => console.log('new post', post))
        .catch(err => console.log('errrrrr', err))
    }
    
});