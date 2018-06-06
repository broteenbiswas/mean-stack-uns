angular.module('meanvols', ['ngRoute'])
.config(config);

function config($routeProvider) {
  console.log("In the router");
    $routeProvider.when('/',{
      templateUrl: 'angular-app/main/main.html',
    })
      .when('/uns', {
        templateUrl: 'angular-app/vol-list/vols.html',
        controller: VolController,
        controllerAs: 'vm'
      }).when('/uns/:id', {
        
        templateUrl: 'angular-app/vol-detail/voldetail.html',
        controller: VolsController,
        controllerAs: 'vm'
      }).when('/register', {
        templateUrl: 'angular-app/register/register.html',
        controller: RegisterController,
        controllerAs: 'vm',
        access: {
          restricted: false
        }
      }).otherwise({
        rdirectedTo : '/'
      });
     
  }

  