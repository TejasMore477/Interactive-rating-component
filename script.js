let cont1 = document.querySelector("#container1");
let cont2 = document.querySelector("#container2");
let sub = document.querySelector("#subbtn");
let rating = document.querySelectorAll("#rates");
let num = document.querySelector("span");


sub.addEventListener("click", () => {
    console.log(cont1)
    console.log(cont2)
    cont1.classList.add("hidden");
    cont2.classList.remove("hidden")
})

rating.forEach((elem) => {
    elem.addEventListener("click",() =>{
       num.innerHTML = elem.textContent;
    })
});