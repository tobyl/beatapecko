var sections = document.querySelectorAll('section')
var navTrigger = document.querySelector('#show-modal')
var closeNav = document.querySelector('#close-nav')

function isInViewport(el) {
  var rect = el.getBoundingClientRect()
  var halfway = window.innerHeight / 2
  var isVisible = rect.top < halfway
  return isVisible
}

function animateChildren(el) {
  var children = Array.from(el.children)
  children.forEach((ch, i) => {
    setTimeout(function() {
      ch.classList.add('animate')
    }, i * 250)
  })
}

document.addEventListener("scroll", (event) => {
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible')

      var animatedElem = section.querySelector('.animated')

      if (animatedElem) {
        animateChildren(animatedElem)
      }

    } else {
      section.classList.remove('visible')
    }
  })
})

navTrigger.addEventListener('click', function() {
  document.querySelector('.mobile-nav').classList.add('active')
})

closeNav.addEventListener('click', function() {
  document.querySelector('.mobile-nav').classList.remove('active')
})