// Wurde automatisch bei Projekterstellung generiert 


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


//Globale Funktionen - (kann man in jedem Angular/javascript aufrufen)
var gMap;
// Funktion der Startseite
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


//Funktion für die Standorte um diese herauszufinden
function initAdresse(adresse, id) {

    document.getElementById(id).innerHTML = '';

    var myOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Map wird estellt 
    var map = new google.maps.Map(document.getElementById(id), myOptions);

    gehezuAddress(adresse, map);

    //Workaround/zwischenlösung gegen graue Box (falls man dies nicht macht bleibt der Element Div grau)
    setTimeout(function () {
        google.maps.event.trigger(map, 'resize');
    }, 100)


}

//Anhand der Adresse 1.Den Punkt mit Geocoder anhand der Adresse  herausfinden und 2. Den Marker auf den Punkt setzten
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