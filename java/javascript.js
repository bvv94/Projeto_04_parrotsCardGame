
let jogo = Number(prompt('Com quantas cartas deseja jogar?'))

do {
    if ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14)) {
        jogo = prompt('Informe um valor par (entre 4-14)!');
    }
} while ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14));

const cards = []; //array das cartas

i = 0;
while (i <= jogo) {
    cards.push(document.querySelector('card'));
    console.log(card[i]);
}



function game() {

}

function turn(card) {
    card.innerHTML = `<img src="./files/bobrossparrot.gif">'`;
    const aux = card.innerHTML; //virou pro gif
    const intervalo = window.setTimeout(self, 100);
    // function click();
    //alert(aux);
     setTimeout(30);
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