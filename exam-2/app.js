const body= document.querySelector("body")
const changeBtn= document.getElementById("moodChanged")
const container= document.querySelector("container")
changeBtn.addEventListener("click",()=>{
    body.classList.toggle("dark")
    changeBtn.classList.toggle("dark")
    container.classList.toggle("dark")
})