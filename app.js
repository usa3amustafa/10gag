const content = document.querySelector('.content')
const aside = document.querySelector('aside')
const hamburger = document.querySelector('.hamburger')
const loginBtns = document.querySelectorAll('.log-in')
const signUpModal = document.querySelector('.signup-modal')
const logInModal = document.querySelector('.login-modal')
const overlay = document.querySelector('.overlay')
const alreadyMember = document.querySelector('.already-member')
const closeSignupModal = document.querySelector('.signup-close-modal')
const closeLoginModal = document.querySelector('.login-close-modal')
const user = document.querySelectorAll('.user')
const dropdownNav = document.querySelector('.dropdown-nav')
const overlay2 = document.querySelector('.overlay-2')
const dropdownNavSec = document.querySelector('.dropdown-nav-sec-links')
const dropdownNavSecTitle = document.querySelector('.dropdown-nav-sec-title')
const darkMode = document.querySelector('.dark-mode')
const darkModeSwitch = document.querySelector('.dark-mode-switch')
const darkModeCircle = document.querySelector('.circle')

hamburger.addEventListener('click', () => {
  aside.classList.toggle('hide-aside')
})

// overlay and modals

loginBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    overlay.classList.toggle('hidden')
    signUpModal.classList.toggle('hidden')
  })
})

alreadyMember.addEventListener('click', () => {
  signUpModal.classList.toggle('hidden')
  logInModal.classList.toggle('hidden')
})
closeSignupModal.addEventListener('click', () => {
  overlay.classList.toggle('hidden')
  signUpModal.classList.toggle('hidden')
})
closeLoginModal.addEventListener('click', () => {
  overlay.classList.toggle('hidden')
  logInModal.classList.toggle('hidden')
})
overlay.addEventListener('click', () => {
  overlay.classList.add('hidden')
  logInModal.classList.add('hidden')
  signUpModal.classList.add('hidden')
})

// dropdown nav

user.forEach(u => {
  u.addEventListener('click', () => {
    dropdownNav.classList.add('show-dropdown-nav')
    overlay2.classList.remove('hidden')
  })
})

overlay2.addEventListener('click', () => {
  dropdownNav.classList.remove('show-dropdown-nav')
  overlay2.classList.add('hidden')
})

dropdownNavSecTitle.addEventListener('click', () => {
  dropdownNavSec.classList.toggle('show-dropdown-nav-sec-links')
})

// dark mode

darkMode.addEventListener('click', () => {
  darkModeCircle.classList.toggle('move-circle')
  document.body.classList.toggle('dark-mode-clrs')
})
