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
      icon: "../img/marker.svg",
      map: map,
    })
  }

  window.initMap = initMap

  var form = document.getElementById('my-form')
    
  async function handleSubmit(event) {
    event.preventDefault()
    
    var status = document.getElementById('my-form-status')
    var data = new FormData(event.target)

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          status.innerHTML = 'Thanks for your submission!'
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error['message']).join(", ")
            } else {
              status.innerHTML = 'Oops! There was a problem submitting your form'
            }
          })
        }
      })
      .catch(error => {
        status.innerHTML = 'Oops! There was a problem submitting your form'
      })
  }
  if (form) {
    form.addEventListener('submit', handleSubmit)
  }
  
})();