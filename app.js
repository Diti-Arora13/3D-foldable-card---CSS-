const wholeCard = document.querySelector(".whole-card");
const outside = document.querySelector(".outside");
const insideContent = document.querySelector(".inside-content")
const last = document.querySelector(".last")
        
outside.addEventListener("click", () => {
    wholeCard.classList.toggle("whole-card-active")
    outside.classList.toggle("outside-active")
})
        
insideContent.addEventListener("click", () => {
    insideContent.classList.toggle("inside-content-active")
    last.classList.toggle("last-active")
    outside.classList.toggle("inside-content-active-outside")
})