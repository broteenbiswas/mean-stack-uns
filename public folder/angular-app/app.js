angular.module('meanvols', ['ngRoute'])
.config(config).run();

function config($httpProvider, $routeProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}

function config($httpProvider,$routeProvider) {
  console.log("In the router");
    $routeProvider.when('/',{
      templateUrl: 'angular-app/main/main.html',
      access: {
        restricted: false
      }
    })
      .when('/uns', {
        templateUrl: 'angular-app/vol-list/vols.html',
        controller: VolController,
        controllerAs: 'vm',
        access: {
          restricted: false
        }
      }).when('/uns/:id', {
        
        templateUrl: 'angular-app/vol-detail/voldetail.html',
        controller: VolsController,
        controllerAs: 'vm',
        access: {
          restricted: false
        }
      }).when('/register', {
        templateUrl: 'angular-app/register/register.html',
        controller: RegisterController,
        controllerAs: 'vm',
        access: {
          restricted: false
        }
      }).when('/admin', {
        templateUrl: 'angular-app/admin/admin.html',
        controller: AdminNumberOfVolsController,
        controllerAs: 'vm',
        access: {
          restricted: true
        }
      }).when('/dashboard/query', {
        templateUrl: 'angular-app/query/query.html',
        controller: QueryController,
        controllerAs: 'vm',
        
        access: {
          restricted: false
        }
      }).otherwise({
        redirectedTo : '/'
      });

      function run($rootScope, $location, $window, AuthFactory) {
        $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
          if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
            event.preventDefault();
            $location.path('/');
          }
        });
      }
     
  }