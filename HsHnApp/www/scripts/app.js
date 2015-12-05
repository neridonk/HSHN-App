var theApp = angular.module('hshnApp', [
  'hshnApp.HomeController',
  'hshnApp.StandorteController',
  'ngRoute'
]);

theApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when("/", { templateUrl: "scripts/View/Home.html", controller: "HomeController" }).
      when("/Test", { templateUrl: "scripts/View/Test.html", controller: "HomeController" }).
      when("/standorte", { templateUrl: "scripts/View/Standorte.html", controller: "StandorteController" }).
      otherwise({ redirectTo: '/' });
}]);