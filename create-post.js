// create post
// dropdown
const rules = document.querySelector('.rules')
const rulesTitleContainer = document.querySelector('.rules-title-container')
const settingDropDown = document.querySelector('.setting-dropdown')
const settingIcon = document.querySelector('.setting-icon')
const chooseSectionDropdown = document.querySelector('.choose-section-dropdown')
const chooseSection = document.querySelector('.choose-section')
rulesTitleContainer.addEventListener('click', () => {
  rules.classList.toggle('show-rules')
})

settingIcon.addEventListener('click', () => {
  settingDropDown.classList.add('show-setting-dropdown')
  overlay2.classList.remove('hidden')
})

overlay2.addEventListener('click', () => {
  overlay2.classList.add('hidden')
  settingDropDown.classList.remove('show-setting-dropdown')
})

chooseSection.addEventListener('click', () => {
  chooseSectionDropdown.classList.toggle('show-choose-section-dropdown')
  overlay2.classList.remove('hidden')
})

overlay2.addEventListener('click', () => {
  overlay2.classList.add('hidden')
  chooseSectionDropdown.classList.remove('show-choose-section-dropdown')
})
