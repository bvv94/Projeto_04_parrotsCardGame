let jogo = Number(prompt('Com quantas cartas deseja jogar?'))

do {
    if ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14)) {
        jogo = prompt('Informe um valor par (entre 4-14)!');
    }
} while ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14));


const baralho = [
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/bobrossparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/bobrossparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/explodyparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/explodyparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/fiestaparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/fiestaparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/metalparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/metalparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/revertitparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/revertitparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/tripletsparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/tripletsparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/unicornparrot.gif"></div></li>`,
    `<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/unicornparrot.gif"></div></li>`,
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


console.log(partida);
let img = [];
let imggif = [];

function turn(card) { //peguei a carta

    card.classList.add('clicado');
      // ----------VIRA A PRIMEIRA AQUI
    img = document.querySelector(".clicado .back"); //dentro da carta pegar a img e trocar pelo gif
    img.classList.add("escondido"); //esconde o parrot
    imggif = document.querySelector(".clicado .gif");
    imggif.classList.remove("escondido");//mostra gif
    
          // -------TERMINA DE VIRAR SÓ A PRIMEIRA 
/*
    card.classList.add('clicado');
    for (let i = 0; i < partida.length; i++) {
        if (partida[i].classList.contains('clicado')) {
            img[i] = document.querySelector(".back"); //dentro da carta pegar a img e trocar pelo gif
            img[i].classList.add("escondido"); //esconde o parrot
            imggif[i] = document.querySelector(".gif");
            imggif[i].classList.remove("escondido");//mostra gif
        }
    }*/
    /*
     for (i = 0; i < partida.length; i++) {
         if (x[i].classList.contains('selecionado')) {
             let teste = x.innerHTML;
             console.log(teste);
             let img = document.querySelector(".selecionado .back"); //dentro da carta pegar a img e trocar pelo gif
             console.log(img);
             img.classList.add("escondido"); //esconde o parrot
             let imggif = document.querySelector(".selecionado.gif");
             imggif.classList.remove("escondido");//mostra gif
         }
     }*/
}

