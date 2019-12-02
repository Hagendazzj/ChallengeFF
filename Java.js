function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 41.878114, lng: -87.629798}
  });

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
