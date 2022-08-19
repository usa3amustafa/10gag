const content = document.querySelector('.content')
const aside = document.querySelector('aside')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
  aside.classList.toggle('hide-aside')
  content.classList.toggle('shift-content')
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

// create post

const rules = document.querySelector('.rules')
const rulesTitleContainer = document.querySelector('.rules-title-container')

rulesTitleContainer.addEventListener('click', () => {
  rules.classList.toggle('show-rules')
})
