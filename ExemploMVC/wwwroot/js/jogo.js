﻿function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {
    
    var numeroAleatorioUm = valorAleatorio();
    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + numeroAleatorioUm + '.png'); 
    pontos1 += numeroAleatorioUm ;
    
    document.getElementById('jogador1').innerHTML = 'Pontos: ' + pontos1;
    //alert(numeroAleatorioUm);
}

function jogador2() {
    var numeroAleatorioDois = valorAleatorio();
    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src", '/images/' + numeroAleatorioDois + '.png'); 
    pontos2 += numeroAleatorioDois;

    document.getElementById('jogador2').innerHTML = 'Pontos: ' + pontos2;
}

var pontos1 = 0;
var pontos2 = 0;
//document.getElementById('jogador1').innerHTML = 'Pontos: ' + pontos1;
//document.getElementById('jogador2').innerHTML = 'Pontos: ' + pontos2;


function resultado() {
    if (pontos1 > pontos2 && pontos1 <= 21) {
        document.getElementById('resultado').innerHTML = 'GANHA O JOGADOR 1!! ';
        //alert('JOGADOR 1 GANHOU!');
    } else if (pontos1 < pontos2 && pontos2 <= 21) {
        document.getElementById('resultado').innerHTML = 'GANHA O JOGADOR 2!! ';
        //alert('JOGADOR 2 GANHOU!');
    } else if (pontos1 <= 21 && pontos2 <= 21) {
        document.getElementById('resultado').innerHTML = 'A RODADA EMPATOU! ';
        //alert('É UM EMPATE'); //empate
    } else if (pontos1 > 21 && pontos2 > 21) {
        document.getElementById('resultado').innerHTML = 'NINGUEM GANHA!! '
        //alert('SEM VENCEDOR'); // sem vencedor
    } else if (pontos1 <= 21 && pontos2 > 21) {
        document.getElementById('resultado').innerHTML = 'GANHA O JOGADOR 1!! ';
        //alert('JOGADOR 1 GANHOU!');
    } else if (pontos1 > 21 && pontos2 <= 21) {
        document.getElementById('resultado').innerHTML = 'GANHA O JOGADOR 2!! ';
        //alert('JOGADOR 2 GANHOU!');
    }
}


function iniciarjogo() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_iniciarjog = document.getElementById("btn_iniciar");

    $(btn_jogador1).attr('hidden', 'hidden');
    $(btn_parar1).attr('hidden', 'hidden');
    $(btn_jogador1).removeAttr('hidden');
    $(btn_parar1).removeAttr('hidden');
    $(btn_iniciarjog).attr('hidden', 'hidden');

}


function parar1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');


}

function parar2() {


    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    $(btn_parar2).attr(resultado());

}


function reiniciar() {
    var reiniciarj = document.getElementById("btn_reinicar");
   
    $(reiniciarj).attr(location.reload());
    }



