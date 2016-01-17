var app = angular.module('hshnApp.RouteBerechnenController', []);

app.controller('RouteBerechnenController', function ($scope, $routeParams) {
    $scope.param = $routeParams.param;

    var map = null;

    //STart Variablen
    $scope.eaddr = "Stuttgart";
    $scope.daddr = "Heilbronn";


    //google maps Services Initalisiert
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay;


    $scope.init = function () {
        LoadMap();

        if ($scope.param != null) {
            initParamRoutes();
        }
    }

    //Nur wenn man auf Marker in den Standtorten klickt
    function initParamRoutes() {
    
            document.getElementById("daddr").value = "Max-Planck-Straße 39, Heilbronn";
            document.getElementById("eaddr").value = $scope.param;
            $scope.route();
        
    }


    //map wird in das DivElement geladen
    function LoadMap() {


        directionsDisplay = new google.maps.DirectionsRenderer();
        map = new google.maps.Map(document.getElementById('karte'),
        {
            center: new google.maps.LatLng(52.5162731, 13.3777642),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            scaleControl: true,
            overviewMapControl: true,
            overviewMapControlOptions: { opened: true },
        });

        directionsDisplay.setMap(map);


    }

    //Route berechnet
    $scope.route = function () {

        $scope.daddr = document.getElementById("daddr").value;
        $scope.eaddr = document.getElementById("eaddr").value;

        directionsService.route(
        {
            //start
            origin: $scope.daddr,
            //Ende adresse
            destination: $scope.eaddr,
            travelMode: google.maps.TravelMode.DRIVING
        },
        function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }




    $scope.init();
});

