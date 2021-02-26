const coll = document.getElementsByClassName("faq__collapsible");

export function initFaq() {
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const arrowUp = this.firstElementChild
            const arrowDown = this.lastElementChild
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
                arrowDown.classList.add("is-active")
                arrowUp.classList.remove("is-active")
            } else {
                content.style.display = "block";
                arrowDown.classList.remove("is-active")
                arrowUp.classList.add("is-active")
            }
        });
    }
}

