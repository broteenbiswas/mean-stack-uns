angular.module('meanvols').controller('AdminNumberOfVolsController',AdminNumberOfVolsController);


function AdminNumberOfVolsController($http){
    var vm=this;
$http.get('api/vols').then(function(result){

   
    console.log("No of volunteers ", result.data.count);

    vm.count= result.data.count.toString();
    console.log("In the vm variable",vm.count.toString());

});
}