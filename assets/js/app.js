(function () {

  'use strict'

  var $body = document.querySelector('body')
  var $menuModal = document.getElementById('menu-modal')
  var $showMenu = document.getElementById('show-modal')

  function openModal() {
    $menuModal.showModal()
    $body.classList.add('modal-open')
    $body.addEventListener('click', function(e) {
      if (e.target.id === 'menu-modal') {
        $menuModal.close()
        $body.classList.remove('modal-open')
      }
    })
  }

  $showMenu.addEventListener('click', function(e) {
    e.preventDefault()
    openModal()
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
  })

  var servicesElems = document.querySelectorAll('.service-block')

})();