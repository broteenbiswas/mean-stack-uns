angular.module('meanvols').controller('VolController', VolController);

function VolController(voldatafactory){
    var vm=this;
    console.log("You are there in the controller");
    vm.title="Welcome To You N Society";
    voldatafactory.volunteerList().then(function(response){
        //console.log(response);
        vm.volunteers= response.data;
        
    });
}