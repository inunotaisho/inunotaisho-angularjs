import angular from 'angular';

angular.module('write',[])
.controller('writeCtrl', ($scope, $http) => {
    $scope.submitBlog = function() {
        const newPost = {
            subject: $scope.subject,
            post: $scope.post 
        }

//        console.log('suuuuu', newPost)

        $http.post('/blog', newPost)
        .then(post => {
            console.log('errrrrr', post);
        })
        .catch(err => console.log('errrrrr', err));
    }
    
});