angular.module('meanvols').directive('mhDashboard', mhDashboard);

function mhDashboard() {
  return {
    restrict: 'E',
    templateUrl: 'angular-app/dashboard-directive/dashboard-directive.html'
  };
}