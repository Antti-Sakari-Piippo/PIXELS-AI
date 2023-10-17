const hamburger = document.querySelector('.hamburger')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')

////////// Navbar
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false
  navToggle.setAttribute('aria-expanded', !expanded)
})

document.addEventListener('click', (event) => {
  if (
    event.target !== navMenu &&
    event.target !== hamburger &&
    !navMenu.contains(event.target)
  ) {
    navToggle.setAttribute('aria-expanded', 'false')
  }
})

// Update the navigation state when the window is resized
window.addEventListener('resize', () => {
  if (window.innerWidth > 1100) {
    navToggle.setAttribute('aria-expanded', 'false')
  } else {
    navToggle.setAttribute('aria-expanded', 'false')
  }
})

///////// Accordion
const questions = document.querySelectorAll('.faq-page')

questions.forEach((item) => {
  item.addEventListener('click', () => {
    const faqBody = item.parentElement.querySelector('.faq-body')
    faqBody.classList.toggle('active')
    item.classList.toggle('rotate')
  })
})
