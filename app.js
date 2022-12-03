//import "./style.css";
//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

const pinta = ['spade','club','heart','diamond'];
const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let pintaizq = document.querySelector("#iconoizq");
let numero = document.querySelector("#num");
let pintader = document.querySelector("#iconoder");


function seleccionarcarta(array1,array2) {
    let card =[]
    card.push(array1[Math.floor(Math.random()*array1.length)]);
    card.push(array2[Math.floor(Math.random()*array2.length)]);
    return card
}
function seleccionarcolor(arr){
    if(arr[0] === "header" || arr[0] === "diamond"){
        iconoizq.style.color = "red";
        num.style.color = "red";
        iconoder.style.color = "red";
    }
    else{
        iconoizq.style.color = "black";
        num.style.color = "black";
        iconoder.style.color = "black";
    }
}
function seleccionarpinta(arr){
    if(arr[0] === "header"){
        iconoizq.innerHTML = "♥"
        iconoder.innerHTML = "♥"
    }
    else if(arr[0] === "diamond"){
        iconoizq.innerHTML = "♦"
        iconoder.innerHTML = "♦"
    }
    else if(arr[0] === "club"){
        iconoizq.innerHTML = "♣"
        iconoder.innerHTML = "♣"
    }
    else{
        iconoizq.innerHTML = "♠"
        iconoder.innerHTML = "♠"
    }
}
function seleccionarnumero(arr){
    num.innerHTML = arr[1];
}
function generacionCarta(){
    let card = seleccionarcarta(pinta, numbers);
    seleccionarpinta(card);
    seleccionarcolor(card);
    seleccionarnumero(card);
}

window.onload = function(){generacionCarta()}


