var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks = document.getElementsByName('li')[0]

toggleButton.addEventListener('click', () => {
 navbarLinks.classList.toggle('active')

})