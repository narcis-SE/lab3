const theForm = document.getElementById("theForm");

let colaButton = document.getElementById("cola");
let peanutButton = document.getElementById("peanut");
let barButton = document.getElementById("bar");
let fruitButton = document.getElementById("fruit");


let totalForm = document.getElementById("total");
let total = 0.00;
theForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    let cola = parseFloat(colaButton.value);
    let peanut = parseFloat(peanutButton.value);
    let bar = parseFloat(barButton.value);
    let fruit = parseFloat(fruitButton.value);
    
    
    colaButton.onclick = function(){
     total += cola;
     totalForm.innerText = "$" + total.toFixed(2);
 
    }

    peanutButton.onclick = function(){
        total += peanut;
        totalForm.innerText = "$" + total.toFixed(2);
    }

    barButton.onclick = function(){
        total += bar;
        totalForm.innerText = "$" + total.toFixed(2);
    }

    fruitButton.onclick = function(){
        total += fruit;
        totalForm.innerText ="$" + total.toFixed(2);
    }

   

})