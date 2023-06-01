let plane = document.querySelector("#flight");
let car = document.querySelector("#car");
let bus = document.querySelector("#bus");

let cardTitle = document.querySelector(".card-title");
let form = document.querySelector("form");
let close = document.querySelector(".close");

let validate = document.querySelector(".validate");

function formOpen () {
    form.style.visibility = "visible";
}

function formClose () {
    form.style.visibility = "hidden";
}

close.addEventListener("click", () => {
    formClose();
})

plane.addEventListener("click", () => {
    cardTitle.textContent = "plane";
    formOpen();
})

bus.addEventListener("click", () => {
    cardTitle.textContent = "bus";
    formOpen();
})

car.addEventListener("click", () => {
    cardTitle.textContent = "car";
    formOpen();
})