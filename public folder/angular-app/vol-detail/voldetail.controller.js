angular.module('meanvols').controller('VolsController', VolsController);

function VolsController($route, $routeParams, voldatafactory) {
    console.log("inside volscontroller ");
  var vm = this;
  var id = $routeParams.id;
  vm.isSubmitted = false;
  voldatafactory.voldetail(id).then(function(response) {
    vm.vol = response.data;
    
});
}