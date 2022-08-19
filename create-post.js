// create post
// dropdown
const rules = document.querySelector('.rules')
const rulesTitleContainer = document.querySelector('.rules-title-container')

rulesTitleContainer.addEventListener('click', () => {
  rules.classList.toggle('show-rules')
})
