// collapese items here is where the buttons colapse and information will be dysplays regerding the button you use
$( ".display-information-1" ).click(function() {
  $('.h').toggle()
  $( ".p" ).toggle( );
  
  
});
$( ".display-information-2" ).click(function() {
  $('.h-1').toggle()
  $( ".p-1" ).toggle();
});
$( ".display-information-3" ).click(function() {
  $('.h-2').toggle()
  $( ".p-2" ).toggle();
});
$( ".display-information-4" ).click(function() {
  $('.h-3').toggle()
  $( ".p-3" ).toggle();
});

        

// google maps

function initMap() {
    var map = new google.maps.Map(document.getElementById("maps"), {
        zoom: 4,
        center: {
            lat: 4.683218,
            lng: -74.078700
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 11.260409, lng: -73.406219 },
        { lat: 3.328771, lng: -76.638421 },
        { lat: 6.047596, lng: -74.989483 },
        { lat: 6.138542, lng: -75.382424 },
    ];

  var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}


    
  