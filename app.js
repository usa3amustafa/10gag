const content = document.querySelector('.content')
const aside = document.querySelector('aside')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
  aside.classList.toggle('hide-aside')
  content.classList.toggle('shift-content')
})
