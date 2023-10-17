const hamburger = document.querySelector('.hamburger')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')
const navMenuLink = document.querySelectorAll('#navMenu li a')

const dropdownImg = document.getElementById('dropdown-img')
const questionItem = document.getElementById('questions__item')
// const openClose = document.getElementById('open_close')
// const answer = document.getElementById('answer')

// var faqAfter = window.getComputedStyle(faq, '::after')

// openClose.addEventListener('click', function handleClick(event) {
//   // answer.classList.toggle("open");
//   faqAfter.classList.toggle('rotate')
//   console.log(faqAfter)
//   // console.log(answer);
// })

// const faq = document.getElementsByClassName('faq-page')

// let i
// for (i = 0; i < faq.length; i++) {
//   faq[i].addEventListener('click', function () {
//     /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//     this.classList.toggle('active')
//     /* Toggle between hiding and showing the active panel */
//     var body = this.nextElementSibling
//     if (body.style.display === 'block') {
//       body.style.display = 'none'
//     } else {
//       body.style.display = 'block'
//     }
//   })
// }

// document.addEventListener('click', function handleClick(event) {
//   if (
//     event.target.classList.contains('questions__item')
//     // event.target.classList.contains("questions__item__question")
//   ) {
//     const closestH4 = questionItem.closest('h4')
//     closestH4.style.border = '4px solid black'
//   }
// })

///// //////NAVBAR
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
