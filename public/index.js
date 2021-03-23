const hambIcon = document.querySelector("#hamburger")
const closeIcon = document.querySelector("#close")
const nav = document.querySelector("#nav")
const accordionItems = document.querySelectorAll(".accordion-item")
const accordionContents = document.querySelectorAll(".accordion-content")

hambIcon.addEventListener("click", () => {
    hambIcon.style.display = "none";
    closeIcon.style.display = "block";
    nav.style.display = "block";
})

closeIcon.addEventListener("click", () => {
    closeIcon.style.display = "none";
    hambIcon.style.display = "block";
    nav.style.display = "none";
})

accordionItems.forEach(item => {
    const selectedRow = item.firstElementChild
    selectedRow.addEventListener("click", toggleAccordion)
})

function toggleAccordion (e) {
    accordionContents.forEach(content => {
        if (content == e.target.nextElementSibling) {
            if (content.classList.contains("closed")) {
                content.classList.remove("closed")
                e.target.children[1].classList.add("rotate")
            } else {
                content.classList.add("closed")
                e.target.children[1].classList.remove("rotate")
            }
        } else {
            content.classList.add("closed")
            content.previousElementSibling.children[1].classList.remove("rotate")
        }
    })
}

document.addEventListener("mouseup", (e) => {
    accordionItems.forEach(item => {
        if (e.target != item && e.target.parentNode != item) {
            if (!item.children[1].classList.contains("closed")) {
                item.children[1].classList.add("closed")
            }
        }
    })
})