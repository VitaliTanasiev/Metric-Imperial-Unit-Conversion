
let feet = 3.281; // 1 meter = 3.281 feet
let meter = 0.3048;
let gallon = 0.264; // 1 liter = 0.264 gallon
let liter = 3.785412;
let pound = 2.204; // 1 kilogram = 2.204 pound
let kilo = 0.45359237;

let inputEl = document.getElementById("input-span");
let btn = document.getElementById("convert-btn");
let lenghtEl = document.getElementById("lenght-div");
let volumeEl = document.getElementById("volume-div");
let massEl = document.getElementById("mass-div");


btn.addEventListener("click", function () {
    let input = inputEl.value;
    let resultFeet = input * feet;
    let resultMeter = input * meter;
    let resultGallon = input * gallon;
    let resultLiter = input * liter;
    let resultPound = input * pound;
    let resultKilo = input * kilo;

    lenghtEl.innerHTML = `<p class="paragraph">${input} meters = ${resultFeet.toFixed(3)} feet</p>|<p class="paragraph">${input} feet = ${resultMeter.toFixed(3)} meters</p>`;
    volumeEl.innerHTML = `<p class="paragraph">${input} liters = ${resultGallon.toFixed(3)} gallons</p>|<p class="paragraph">${input} gallons = ${resultLiter.toFixed(3)} liters</p>`;
    massEl.innerHTML = `<p class="paragraph">${input} kilos = ${resultPound.toFixed(3)} pounds</p>|<p class="paragraph">${input} pounds = ${resultKilo.toFixed(3)} kilos</p>`;

});


