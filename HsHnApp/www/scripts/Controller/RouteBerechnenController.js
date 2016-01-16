var app = angular.module('hshnApp.RouteBerechnenController', []);

app.controller('RouteBerechnenController', function ($scope, $routeParams) {
    $scope.param = $routeParams.param;

    var map = null;
    $scope.eaddr = "Stuttgart";
    $scope.daddr = "Heilbronn";



    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay;


    $scope.init = function () {
        LoadMap();

        if ($scope.param != null) {
            initParamRoutes();
        }
    }

    function initParamRoutes() {
        navigator.geolocation.getCurrentPosition(function (position) {
            document.getElementById("daddr").value = "Hochschule Heilbronn";
            document.getElementById("eaddr").value = $scope.param;
            $scope.route();
        }, function () {
            document.getElementById('karte').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
        });
    }



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
    $scope.route = function () {

        $scope.daddr = document.getElementById("daddr").value;
        $scope.eaddr = document.getElementById("eaddr").value;

        directionsService.route(
        {
            origin: $scope.daddr,
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

