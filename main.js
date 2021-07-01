const closePoupUp = document.querySelector(".close-poup-up")
const divContainer = document.querySelector(".container-poup-up")
const openPoupUp = document.querySelector("button.button-login")
const divPoupUp = document.querySelector(".div-poup-up")

openPoupUp.onclick = () => {
    divContainer.style.display = "flex"
    divContainer.style.position = "fixed"
    divPoupUp.style.display = "inline"
}

closePoupUp.onclick = () => {
    divContainer.style.display = "none"
    divPoupUp.style.display = "none"
}