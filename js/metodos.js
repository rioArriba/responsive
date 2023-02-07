function toggleVisibilityMenu() {
    var itemsElements = document.getElementsByClassName("c-header__items");
    var hamburgerElements = document.getElementsByClassName("c-header__hamburger");
 
    if (itemsElements[0].className.indexOf("c-header__items--mobile-visible") >= 0) {
        itemsElements[0].className = " c-header__items c-header__items--mobile-hide";
        hamburgerElements[0].innerHTML = "☰";
    } else {
        itemsElements[0].className = "c-header__items c-header__items--mobile-visible";
        hamburgerElements[0].innerHTML = "Cerrar";
    }
}