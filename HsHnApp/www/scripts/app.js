var theApp = angular.module('hshnApp', [
  'hshnApp.HomeController',
  'hshnApp.StandorteController',
  'hshnApp.RouteBerechnenController',
  'ngRoute'
]);

theApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when("/", { templateUrl: "scripts/View/Home.html", controller: "HomeController" }).
      when("/route", { templateUrl: "scripts/View/RouteBerechnen.html", controller: "RouteBerechnenController" }).
      when("/route/:param", { templateUrl: "scripts/View/RouteBerechnen.html", controller: "RouteBerechnenController" }).

      when("/standorte", { templateUrl: "scripts/View/Standorte.html", controller: "StandorteController" }).
      otherwise({ redirectTo: '/' });
}]);