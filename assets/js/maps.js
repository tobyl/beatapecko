(function () {

  'use strict'

  let map

  function initMap() {

    var lat = 42.2850725
    var long = -83.0129319

    map = new google.maps.Map(document.getElementById("map"), {
      center: new google.maps.LatLng(lat, long),
      zoom: 16,
    })
    
    new google.maps.Marker({
      position: new google.maps.LatLng(lat, long),
      icon: "/assets/img/marker.svg",
      map: map,
    })
  }

  window.initMap = initMap

})();