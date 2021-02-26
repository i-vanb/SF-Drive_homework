import '../scss/style.scss'

import {initMenu} from "./menu";
import {initFaq} from "./faq";

document.addEventListener("DOMContentLoaded", initScript)

function initScript() {
    initMenu()
    initFaq()
    // const burgerMenu = document.querySelector("#burger-menu")
    // const btnCloseMenu = document.querySelector("#close-menu")
    // const mobileMenu = document.querySelector("#mobile-menu")

    // burgerMenu.addEventListener("click", openMenu)
    // btnCloseMenu.addEventListener("click", closeMenu)

    // function openMenu() {
    //     mobileMenu.classList.add("is-active")
    //     burgerMenu.classList.remove("is-active")
    // }
    //
    // function closeMenu() {
    //     mobileMenu.classList.remove("is-active")
    //     burgerMenu.classList.add("is-active")
    // }


    // const coll = document.getElementsByClassName("faq__collapsible");
    // let i;
    // for (i = 0; i < coll.length; i++) {
    //     coll[i].addEventListener("click", function() {
    //         this.classList.toggle("active");
    //         const arrowUp = this.firstElementChild
    //         const arrowDown = this.lastElementChild
    //         const content = this.nextElementSibling;
    //
    //         if (content.style.display === "block") {
    //             content.style.display = "none";
    //             arrowDown.classList.add("is-active")
    //             arrowUp.classList.remove("is-active")
    //         } else {
    //             content.style.display = "block";
    //             arrowDown.classList.remove("is-active")
    //             arrowUp.classList.add("is-active")
    //         }
    //     });
    // }

}
