document.addEventListener("DOMContentLoaded", initScript)


function initScript() {
    const burgerMenu = document.querySelector("#burger-menu")
    const btnCloseMenu = document.querySelector("#close-menu")
    const mobileMenu = document.querySelector("#mobile-menu")

    burgerMenu.addEventListener("click", openMenu)
    btnCloseMenu.addEventListener("click", closeMenu)

    function openMenu() {
        mobileMenu.classList.add("is-active")
        burgerMenu.classList.remove("is-active")
    }

    function closeMenu() {
        mobileMenu.classList.remove("is-active")
        burgerMenu.classList.add("is-active")
    }


}
