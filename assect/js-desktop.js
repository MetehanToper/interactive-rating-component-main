const mainContainer = document.querySelector(".container")
const thanksContainer= document.querySelector(".conteiner_2")
const submitButton= document.getElementById("submit")
const rateAgain=document.getElementById("rate-again")
const rating=document.getElementById("rating")
const rates=document.getElementById("btn")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove(`hidden`)
    mainContainer.style.display=(`none`)
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add(`hidden`)
    mainContainer.style.display=(`block`)
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML 
    })
});