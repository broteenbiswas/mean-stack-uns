angular.module('meanvols').controller('RegisterController', RegisterController);


function RegisterController($http) {
    var vm = this;
    vm.register = function() {
        var user = {
          name: vm.name,
          emailid: vm.emailid,
          program: vm.program
        };
        
        $http.post('/api/vols/register', user).then(function(result) {
            console.log(result);
            vm.message = 'Successful registration, please login.';
            vm.error = '';
          }).catch(function(error) {
            console.log(error);
          });

        }
    }