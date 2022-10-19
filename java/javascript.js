
const jogo = Number(prompt('Com quantas cartas deseja jogar?'))
let cartas = Number(jogo);
do {
    if ((cartas%2!==0)||(cartas < 4) || (cartas > 14)) {
        cartas = prompt('Informe um valor par (entre 4-14)!');
    }
} while ((cartas%2!==0)||(cartas<4)||(cartas>14));

const cards = []; //array das cartas

function tabuleito() {
    i = 0;
    while (i <= cartas) {
        cards.push();
    }
}


function game() {

}

function turn(card) {
    card.innerHTML = `<img src="./files/bobrossparrot.gif">'`;
    const aux = card.innerHTML; //virou pro gif
    const intervalo = window.setTimeout(turn, 100);
    // function click();
    //alert(aux);
    // setTimeout(30);
    // function turnback(this);
}

function click() {
    const intervalo = window.setInterval(turn, 1000);
    function lerolero() {
        window.alert("Popup");
    }
    clearInterval(intervalo);
}
/*
function turnback (virarcosta){
    card.innerHTML = '<img src="./files/back.png">';
}*/