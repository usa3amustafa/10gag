const content = document.querySelector('.content')
const aside = document.querySelector('aside')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
  aside.classList.toggle('hide-aside')
})

// overlay and modals
const loginBtns = document.querySelectorAll('.log-in')
const signUpModal = document.querySelector('.signup-modal')
const logInModal = document.querySelector('.login-modal')
const overlay = document.querySelector('.overlay')
const alreadyMember = document.querySelector('.already-member')

const closeSignupModal = document.querySelector('.signup-close-modal')
const closeLoginModal = document.querySelector('.login-close-modal')

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

const user = document.querySelectorAll('.user')
const dropdownNav = document.querySelector('.dropdown-nav')
const overlay2 = document.querySelector('.overlay-2')

user.forEach(u => {
  u.addEventListener('click', () => {
    dropdownNav.classList.add('show-dropdown-nav')
    overlay2.classList.remove('hidden')
  })
})

overlay2.addEventListener('click', e => {
  console.log(e.target)
  dropdownNav.classList.remove('show-dropdown-nav')
  overlay2.classList.add('hidden')
})

const dropdownNavSec = document.querySelector('.dropdown-nav-sec-links')

const dropdownNavSecTitle = document.querySelector('.dropdown-nav-sec-title')

dropdownNavSecTitle.addEventListener('click', () => {
  dropdownNavSec.classList.toggle('show-dropdown-nav-sec-links')
})
