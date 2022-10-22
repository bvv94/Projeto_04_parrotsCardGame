let jogo = Number(prompt('Com quantas cartas deseja jogar?'))

do {
    if ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14)) {
        jogo = prompt('Informe um valor par (entre 4-14)!');
    }
} while ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14));


const baralho = [
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/bobrossparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/bobrossparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/explodyparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/explodyparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/fiestaparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/fiestaparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/metalparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/metalparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/revertitparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/revertitparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/tripletsparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/tripletsparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/unicornparrot.gif"></div></div></li>`,
    `<li><div onclick="turn(this)" class="card"><div class="carta"><img class= "back" src="./files/back.png"></div><div class="carta"><img class="gif escondido" src="./files/unicornparrot.gif"></div></div></li>`,
];
const partida = []; //array com cartas pelo usuario

for (i = 0; i < jogo; i++) {
    partida.push(baralho[i]); //coloco cartas no tabuleiro conforme input
}
partida.sort(comparador); // embaralha partida

function comparador() { //embaralhador
    return Math.random() - 0.5;
}

const tabuleiro = document.querySelector(".game"); //tabuleiro vazio
for (i = 0; i < jogo; i++) {
    //coloco cartas no tabuleiro conforme input
    tabuleiro.innerHTML += partida[i];
}

//---------AQUI COMEÇA A BRINCADEIRA ------------------

let img = [];
let imggif = [];
//let par = [];
let carta1 = '';
let carta2 = '';
let cont = 0;

function turn(card) { //virando a carta

    card.classList.add("clicado");
    img = document.querySelector(".clicado .back"); //dentro da carta pegar a img e trocar pelo gif
    img.classList.add("escondido"); //esconde o parrot
    imggif = document.querySelector(".clicado .gif");
    imggif.classList.remove("escondido");//mostra gif
    card.classList.remove("clicado");

    if (cont == 0) {
        //carta1 = '';
        //   par.push(card.innerHTML);
        carta1 = card.innerHTML;
        console.log(carta1);
    }
    else if (cont == 1) {
        // carta2 = '';
        // par.push(card.innerHTML);
        carta2 = card.innerHTML;
        console.log(carta2);
    }

    if (cont == 2) {
        cont = 0;
        comparacao();
    } else {
        cont++;
    }
}
/*
function unturn() {
    const cartas = document.querySelectorAll('.clicado');
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove('clicado');
    }
}

function comparacao() {
    if (carta1 == carta2) {
        setTimeout(alert('Você acertou'), 0.5);
    }
    else if (carta1 != carta2) {
        setTimeout(unturn, 2000);
    }
    carta1 = '';
    carta2 = '';
}*/