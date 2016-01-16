var apport = angular.module('hshnApp.StandorteController', []);
console.log("running Standorte");
apport.controller('StandorteController', function ($scope,$location) {
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

      },
      {
          id: 3,
          ort: 'Heilbronn',
          plz: '74081',
          strasse: 'raidweg 21',
          name: 'Eine schöner entspannungs Ort',
          onShow: false

      }
    ];


    $scope.popoverShow = function (element) {
        var eleDiv = "map" + element.id;
        var addresse = element.strasse + " " + element.ort;
        initAdresse(addresse,eleDiv);
        element.onShow = true;
   
    }

    $scope.routeberechnen = function(strasse, ort){
        var earl = '/route/' + strasse+','+ort;
        $location.path(earl);

    }

    $scope.popoverHide = function (element) {
        element.onShow = false
    }

});

