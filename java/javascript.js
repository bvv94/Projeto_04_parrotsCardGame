let jogo = Number(prompt('Com quantas cartas deseja jogar?'))

do {
    if ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14)) {
        jogo = prompt('Informe um valor par (entre 4-14)!');
    }
} while ((jogo % 2 !== 0) || (jogo < 4) || (jogo > 14));


const baralho = [`<li><div onclick="turn(this)" class="card"><img class="back" src="./files/back.png"><img class="gif escondido" src="./files/bobrossparrot.gif"></div></li>`,
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

const tabuleiro = document.querySelector(".game"); 
console.log(tabuleiro);

for (i=0; i<jogo; i++) {
    tabuleiro.innerHTML += baralho[i];
}

function game() {

}

function turn(card) {
    const imgback = document.querySelector(".back");
    imgback.classList.add ("escondido");

    const imggif = document.querySelector(".gif");
    imgback.classList.remove ("escondido");
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