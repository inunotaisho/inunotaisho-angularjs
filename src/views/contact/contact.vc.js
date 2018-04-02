import angular from 'angular';

angular.module('contact', [])
.controller('contactCtrl', ($scope, $http) => {

    $scope.formData = function(isValid, error) {
        this.formInput = {
            firstName:$("input[name='firstName']").val(),
            lastName:$("input[name='lastName']").val(),
            email:$("input[name='email']").val(),
            subject:$("input[name='subject']").val(),
            message: $("textarea[name='message']").val()
        }

        if(isValid){
            console.log(this.formInput);
        } else {
            console.log(error);
        }

        $http.post('/contact', this.formInput)
        .then(data => {
            if(data.status === 200) {
                console.log('response: ', data);
            }
        }).catch(error => {
            console.log('error: ', error);
        });
    }

    $scope.showAlert = true;

});