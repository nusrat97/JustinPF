//type js on banner part======

let content = document.querySelector(".text")
// console.log(item.dataset.text)
    
let countNumber = 0
let typeJs = () => {
    content.innerHTML += content.dataset.text.charAt(countNumber)
    countNumber++
    // console.log(countNumber)
    if (countNumber > content.dataset.text.length){
        countNumber = 0
        content.innerHTML = ""
    }
}
let stop = setInterval(() => {
    typeJs()
}, 100)
    



//veno box on portfolio part=========

let body = document.querySelector("body")
let imgbox = document.querySelector(".imgbox")

body.addEventListener("click", (e) => {
    // console.log(e.target.dataset.url)
    // console.log(e.target.classList[0])
    if (e.target.classList[0] == "airimage"){
        imgbox.classList.add ("imgbox2")
        imgbox.innerHTML = `<img src="${e.target.dataset.url}" alt="images"> <button class="close">X</button>`
    }else{
        imgbox.classList.remove ("imgbox2")
        imgbox.innerHTML = ""
    }
})



//counter up js on footer part===========
  
let counter = document.querySelector(".counter")

let counterNumber = 1
let countstop = counter.innerHTML

let counterUp = () => {
    counter.innerHTML = counterNumber
    counterNumber++
    if (counterNumber > +countstop){
       clearInterval(stop2)
    }
}
let stop2 = setInterval (() => {
    counterUp()
},1000)    

