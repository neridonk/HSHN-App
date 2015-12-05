﻿var apport = angular.module('hshnApp.StandorteController', []);
console.log("running Standorte");
apport.controller('StandorteController', function ($scope) {
    $scope.Standorte = [
      {
          id:1,
          ort: 'Heilbronn',
          plz: '74081',
          strasse: 'Max-Planck-Straße 39',
          name: 'Hochschule Heilbronn Gebäude',
          onShow: false

      },
      {
          id:2,
          ort: 'Heilbronn',
          plz: '74081',
          strasse: 'Jörg-Ratgeb-Platz 2',
          name: 'Netto Marken-Discount',
          onShow: false

      }
    ];


    $scope.popoverShow = function (element) {
        var eleDiv = document.getElementById("map" + element.id);
        var addresse = element.strasse + " " + element.ort;
        initAdresse(addresse,eleDiv);
        element.onShow = true;
    }

    $scope.popoverHide = function (element) {
        element.onShow = false
    }

});
