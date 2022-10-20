let jogo = Number(prompt('Com quantas cartas deseja jogar?'))

do {
    if ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14)) {
        jogo = prompt('Informe um valor par (entre 4-14)!');
    }
} while ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14));


const baralho = ['<div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div>',
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"></div></li>`,
];
const baralhovirado = ['<div class="card"><img src="./files/bobrossparrot.gif"></div></li>',
`<li><div class="card"><img src="./files/explodyparrot.gif"></div>'</li>`,
`<li><div class="card"><img src="./files/fiestaparrot.git"></div>'</li>`,
`<li><div class="card"><img src="./files/metalparrot.gif"></div>'</li>`,
`<li><div class="card"><img src="./files/revertiitparrot"></div>'</li>`,
`<li><div class="card"><img src="./files/tripletsparrot.gif"></div>'</li>`,
`<li><div class="card"><img src="./files/unicornparrot.gif></div>'</li>`];
const cards = []; //array das cartas
const tabuleiro = document.querySelector(".game");
console.log(tabuleiro);

for (i=0; i<jogo; i++) {
    tabuleiro.innerHTML += baralho[i];
    console.log(baralho[i]);
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