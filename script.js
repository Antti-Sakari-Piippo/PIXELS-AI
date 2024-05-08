const hamburger = document.querySelector('.hamburger')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')
const questionsItem = document.querySelectorAll('.questions__item')

// Navbar
function toggleNavigation() {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false
  navToggle.setAttribute('aria-expanded', !expanded)
  // navMenu.style.display = expanded ? 'none' : 'flex';
}

// Toggle the navigation menu when the hamburger button is clicked
navToggle.addEventListener('click', () => {
  toggleNavigation()
})

// Toggle the navigation menu when the Enter key is pressed on the hamburger button
hamburger.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    toggleNavigation()
  }
})
navToggle.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    toggleNavigation()
  }
})

// Click outside to close the navigation menu
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
  }
})

// Accordion functionality
questionsItem.forEach((item) => {
  item.addEventListener('click', () => {
    const faqBody = item.querySelector('.faq-body')
    faqBody.classList.toggle('active')
    item.querySelector('h4').classList.toggle('rotate')
    const expanded = item.getAttribute('aria-expanded') === 'true'
    item.setAttribute('aria-expanded', !expanded)
    faqBody.setAttribute('aria-hidden', expanded)
  })

  item.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      // Enter key
      item.click()
    }
  })
})
