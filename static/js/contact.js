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
  var formInner = document.getElementById('my-form-inner')
  
  function slideUp(target, duration) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }

  async function handleSubmit(event) {
    event.preventDefault()
    
    var status = document.getElementById('my-form-status')
    var data = new FormData(event.target)

    var msg = "Uh oh! There was a problem submitting your request, please call us at 519-255-1117."

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          status.innerHTML = 'Thanks for your submission, we will be in touch!'
          form.reset()
          slideUp(formInner, 500)
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error['message']).join(", ")
            } else {
              status.innerHTML = msg
            }
          })
        }
      })
      .catch(error => {
        status.innerHTML = msg
      })
  }
  if (form) {
    form.addEventListener('submit', handleSubmit)
  }
  
})();