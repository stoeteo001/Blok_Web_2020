var toggleButton = document.querySelector('.toggle-button');    //Maak een variabel voor de Selector class (.toggle-button) en noem deze toggleButton
var navbarLinks = document.querySelector('header ul');          // maak een variabel voor de hele unordered list in de header genaamd NavbarLinks

toggleButton.addEventListener('click', () => {                  // add event wanneer je hem aan klikt maakt die een class aan die active heet. 
 navbarLinks.classList.toggle('active')                         // deze class displayed de navigatie. door weer op de knop de klikken toggled hij hem weg 

});

