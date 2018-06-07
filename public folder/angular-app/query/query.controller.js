angular.module('meanvols').controller('QueryController',QueryController);


function QueryController($http){
    var vm=this;
    vm.isresponse= false;
    vm.programlist= ["TEACH","CREATE","BRIDGE"];

    vm.query = function() {
        var queryparam = {
          name: vm.name,
          program: vm.selectedProgram
        }

        $http.post('api/query',queryparam).then(function(response){
            vm.isresponse= true;
            vm.vols= response.data;
            });
    };

}