var apport = angular.module('hshnApp.StandorteController', []);
console.log("running Standorte");
apport.controller('StandorteController', function ($scope, $location) {
    //scope heist man kann dies im VIew verwenden (Standorte JSON Array)
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
          ort: 'Künzelsau',
          plz: '74653',
          strasse: 'Daimlerstraße 35',
          name: 'Campus Künzelsau',
          onShow: false

      },
      {
          id: 3,
          ort: 'Schwäbisch Hall',
          plz: '74523',
          strasse: 'In den Herrenäckern 5',
          name: 'Campus Schwäbisch Hall',
          onShow: false

      },
      {
          id: 4,
          ort: 'Heilbronn',
          plz: '74076',
          strasse: 'Am Europaplatz 11',
          name: 'Campus Am Europaplatz',
          onShow: false

      }
    ];

    //Popup geht auf und zeigt die Map mit Marker
    $scope.popoverShow = function (element) {
        var eleDiv = "map" + element.id;
        var addresse = element.strasse + " " + element.ort;
        initAdresse(addresse,eleDiv);
        element.onShow = true;
   
    }

    //Klick auf Route berechnen
    $scope.routeberechnen = function(strasse, ort){
        var earl = '/route/' + strasse+','+ort;
        $location.path(earl);

    }

    //Popup schliesen
    $scope.popoverHide = function (element) {
        element.onShow = false
    }

});

