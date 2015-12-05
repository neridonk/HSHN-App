angular.module('hshnApp', [
  'hshnApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when("/", { templateUrl: "scripts/View/Home.html", controller: "HomeController" }).
      when("/Test", { templateUrl: "scripts/View/Test.html", controller: "HomeController" }).
      otherwise({ redirectTo: '/' });
}]);