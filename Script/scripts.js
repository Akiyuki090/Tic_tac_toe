let X = document.querySelector('.X');
let O = document.querySelector('.O');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#botoes button');
let messagecontainer = document.querySelector('#message');
let messagetext = document.querySelector('#message p');
let secondplayer;

//Criando contadores de jogadas:
let player1 = 0;
let player2 = 0;

//adicionando evento de clique
for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2)

        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            if (player1 == player2) {

                player1++;

                if (secondplayer == 'IA-players') {

                    //função pra executar a jogada
                    computerplay();
                    player2++;

                }

            } else {

                player2++;
            }

        }

        checkvictory();

    });

}

//2players ou vs IA
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        secondplayer = this.getAttribute("id");

        for (let j = 0; j < buttons.length; j++) {

            buttons[j].style.display = 'none';

        }

        setTimeout(function () {

            let container = document.querySelector('#container');
            container.classList.remove('hide');

        }, 500)

    })

}

//quem vai jogar
function checkEl(player1, player2) {

    if (player1 == player2) {

        el = X;

    } else {

        el = O;

    }

    return el;

}

//condições de vitorias
function checkvictory() {

    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

    //condições na horizontal

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == 'X' && b2child == 'X' && b3child == 'X') {

            vencedor('X');

        } else if (b1child == 'O' && b2child == 'O' && b3child == 'O') {

            vencedor('O');

        }

    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == 'X' && b5child == 'X' && b6child == 'X') {

            vencedor('x');

        } else if (b4child == 'O' && b5child == 'O' && b6child == 'O') {

            vencedor('O');

        }

    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == 'X' && b8child == 'X' && b9child == 'X') {

            vencedor('X');

        } else if (b7child == 'O' && b8child == 'O' && b9child == 'O') {

            vencedor('O');

        }

    }

    //condições na vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b1child == 'X' && b4child == 'X' && b7child == 'X') {

            vencedor('X');

        } else if (b1child == 'O' && b4child == 'O' && b7child == 'O') {

            vencedor('O');

        }

    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if (b2child == 'X' && b5child == 'X' && b8child == 'X') {

            vencedor('X');

        } else if (b2child == 'O' && b5child == 'O' && b8child == 'O') {

            vencedor('O');

        }

    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b3child == 'X' && b6child == 'X' && b9child == 'X') {

            vencedor('X');

        } else if (b3child == 'O' && b6child == 'O' && b9child == 'O') {

            vencedor('O');

        }

    }

    //condições na diagonal

    if (b7.childNodes.length > 0 && b5.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b7child = b7.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b7child == 'X' && b5child == 'X' && b3child == 'X') {

            vencedor('X');

        } else if (b7child == 'O' && b5child == 'O' && b3child == 'O') {

            vencedor('O');

        }

    }

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b1child == 'X' && b5child == 'X' && b9child == 'X') {

            vencedor('X');

        } else if (b1child == 'O' && b5child == 'O' && b9child == 'O') {

            vencedor('O');

        }

    }

    //empate

    let cont = 0;

    for (let i = 0; i < boxes.length; i++) {

        if (boxes[i].childNodes[0] != undefined) {

            cont++;

        }

    }

    if (cont == 9) {

        vencedor('');


    }


}

//vencedor
function vencedor(ganhou) {

    let scoreX = document.querySelector('#scoreboard-1');
    let scoreO = document.querySelector('#scoreboard-2');
    let msg = '';

    if (ganhou == 'X') {

        scoreX.textContent = parseInt(scoreX.textContent) + 1;
        msg = 'O jogador X ganhou, Parabéns!!!';

    } else if (ganhou == 'O') {

        scoreO.textContent = parseInt(scoreO.textContent) + 1;
        msg = 'O jogador O ganhou, Parabéns!!!';

    } else {

        msg = 'Empatou!!!';

    }

    //mostrar a msg
    messagetext.innerHTML = msg;
    messagecontainer.classList.remove('hide');

    //esconder a msg
    setTimeout(function () {

        messagecontainer.classList.add('hide');

    }, 3000)

    // zerar jogadas
    player1 = 0;
    player2 = 0;

    //remover X e O
    let removendo = document.querySelectorAll('.box div');

    for (let i = 0; i < removendo.length; i++) {

        removendo[i].parentNode.removeChild(removendo[i]);

    }

}

//logica da Ia
function computerplay() {

    let cloneO = O.cloneNode(true);
    counter = 0;
    preenchido = 0;

    for (let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5);

        if (boxes[i].childNodes[0] == undefined) {

            if (randomNumber <= 1) {

                boxes[i].appendChild(cloneO);
                counter++;
                break;

            } else {

                preenchido++;

            }

        }

    }

    if (counter == 0 && preenchido < 9) {

        computerplay();


    }


}





