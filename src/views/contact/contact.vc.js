import angular from 'angular';

angular.module('contact', [])
.controller('contactCtrl', ($http, $scope) => {

    /*function contactForm(){
        let contactForm = document.getElementById('inputform');
        contactForm.setAttribute('action', '//formspree.io/' + 'ebfairweather' + '@' + 'gmail' + '.' + 'com');
        let nested = document.createElement('div');
        nested.setAttribute('class', 'form-status alert');
        contactForm.appendChild(nested);
        contactForm.onsubmit = function(e){
            e.preventDefault();
            let data = {};
            for (let i = 0; i < contactForm.length; ++i) {
                let input = contactForm[i];
                if (input.name) {
                    data[input.name] = input.value;
                };
            };
            let xhr = new XMLHttpRequest();
            xhr.open('POST','https://formspree.io/mnjjbddm', true);
            xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            xhr.send(JSON.stringify(data));
            xhr.onloadend = function (res){
                if (res.target.status === 0) {
                    contactForm.className += 'alert-danger';
                    contactForm.innerHTML = '<div class="alert alert--error row"><h4 class="col-phn-offset-5 col-phn-4 col-tab-offset-5 col-tab-4 col-dsk-offset-5 col-dsk-4" >Ops, there was an error.</h4></div>';
                }
                else if (res.target.status === 400) {
                    contactForm.className += 'alert-danger';
                    contactForm.innerHTML = '<div class="alert alert--error row"><h4 class="col-phn-offset-5 col-phn-4 col-tab-offset-5 col-tab-4 col-dsk-offset-5 col-dsk-4" >Ops, there was an error.</h4></div>';
                }
                else if (res.target.status === 200) {
                    contactForm.className += 'alert-success';
                    contactForm.innerHTML = '<div class="alert alert--success row"><h4 class="col-phn-offset-5 col-phn-4 col-tab-offset-5 col-tab-4 col-dsk-offset-5 col-dsk-4" >Message sent!</h4></div>';
                }
            };
        };
    };*/
    $scope.user={}
    $scope.addUser= function(){
        $http.post('/contact/addUser',{user:$scope.user}).then(res => {
            if(res.status === 200){
                console.log($scope.user);
            }
        })
    }

});