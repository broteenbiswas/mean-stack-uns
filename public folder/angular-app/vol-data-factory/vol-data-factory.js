angular.module('meanvols').factory('voldatafactory',voldatafactory);


function voldatafactory($http){

    return{
        volunteerList : volunteerList,
        voldetail : voldetail
    }

    function volunteerList(){
        return $http.get('api/uns').then(complete)
    }

    function voldetail(id) {
        return $http.get('api/uns/' + id).then(complete).catch(failed);
      }


    function complete(response) {
        return response;
      }
    
      function failed(error) {
        console.log(error.statusText);
      }
}