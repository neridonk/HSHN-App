// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// So debuggen Sie Code beim Seitenladen in Ripple oder auf Android-Geräten/-Emulatoren: Starten Sie die App, legen Sie Haltepunkte fest, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        

      

    };

    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    };

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    };
})();

var gMap;

function initialize(coords) {

    var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);

    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("karte"), myOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: latlng
    });

    gMap = map;
}

var directionsService = new google.maps.DirectionsService();
var directionsRenderer = new google.maps.DirectionsRenderer();

function routeBerechnen() {

    directionsService.route(
    {
        origin: document.getElementById("daddr").value,
        destination: new google.maps.LatLng(52.5162731, 13.3777642),
        travelMode: google.maps.TravelMode.DRIVING
    },
    function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsRenderer.setMap(gMap);
            directionsRenderer.setDirections(response);
        }
    });

    //Workaround gegen graue Box
    setTimeout(function () {
        google.maps.event.trigger(gMap, 'resize');
    }, 500)
}

function initAdresse(adresse, id) {

    document.getElementById(id).innerHTML = '';

    var myOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(id), myOptions);

    gehezuAddress(adresse, map);

    //Workaround gegen graue Box
    setTimeout(function () {
        google.maps.event.trigger(map, 'resize');
    }, 100)


}

function gehezuAddress(address, map) {
    var geocoder = geocoder = new google.maps.Geocoder();

    var address = address
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert("Adresse nicht gefunden");
        }
    });
}