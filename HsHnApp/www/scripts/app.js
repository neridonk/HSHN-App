var theApp = angular.module('hshnApp', [
  'hshnApp.HomeController',
  'hshnApp.StandorteController',
  'hshnApp.RouteBerechnenController',
  'ngRoute'
]);

theApp.config(['$routeProvider', function ($routeProvider) {

    //1. Pfad URL 2. Die Template die in den VIew gesetzt wird 3.Controller für Lokale Funktionen 
    $routeProvider.
      when("/", { templateUrl: "scripts/View/Home.html", controller: "HomeController" }).
      when("/route", { templateUrl: "scripts/View/RouteBerechnen.html", controller: "RouteBerechnenController" }).
      when("/route/:param", { templateUrl: "scripts/View/RouteBerechnen.html", controller: "RouteBerechnenController" }).

      when("/standorte", { templateUrl: "scripts/View/Standorte.html", controller: "StandorteController" }).
      otherwise({ redirectTo: '/' });
}]);