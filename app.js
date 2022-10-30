const responsiveNavigator = document.getElementById('res-nav');
const  bourgeer = document.getElementById('menuer');
let isShown = false;
bourgeer.addEventListener('click', menuHandler);

function menuHandler(){
    isShown=!isShown;
    responsiveNavigator.style.visibility =isShown?'visible':'hidden'
}