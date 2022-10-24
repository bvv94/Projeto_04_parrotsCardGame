let jogo = Number(prompt('Com quantas cartas deseja jogar?'))

do {
    if ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14)) {
        jogo = prompt('Informe um valor par (entre 4-14)!');
    }
} while ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14));


const baralho = [
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/bobrossparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/bobrossparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/explodyparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/explodyparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/fiestaparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/fiestaparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/metalparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/metalparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/revertitparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/revertitparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/tripletsparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/tripletsparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/unicornparrot.gif" /></div></div></li>`,
    `<li class="card" onclick="turn(this)"><div class="front-face face"><div class="carta"><img class="back" src="./files/back.png" /></div></div><div class="back-face face"><div class="carta"><img class="gif escondido" src="./files/unicornparrot.gif" /></div></div></li>`
];

const partida = []; //array com cartas pelo usuario

for (i = 0; i < jogo; i++) {
    partida.push(baralho[i]);//coloco cartas no tabuleiro conforme input
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

let par = [];
let contador = -1;

function turn(carta) { //virando a carta
    carta.classList.toggle("virada");
    contador++;
    par.push(carta.innerHTML);
    console.log(par[0], par[1]);

    if (par.length == 2) {
        contador = 0;
        comparacao();
        // se as cartas forem diferentes
        // setTimeout(desvirar, 2000);
    }
}

function comparacao() {
    if (par[0] === par[1]) {
        alert('entrou igual');

    }
    if (par[0] !== par[1]) {
        alert('entrou diferente');
        setTimeout(desvirar, 2000);
    }
    par = [];
}
function desvirar() {
    const cartas = document.querySelectorAll(".virada");
    console.log(cartas);
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove("virada");
    }
}
