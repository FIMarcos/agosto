/* ===========================================
        CONFIGURAÇÕES DO CONTADOR
=========================================== */


const inicioMes = new Date("2026-08-03T07:00:00");

const fimMes = new Date("2026-08-31T16:00:00");


const inicioExpediente = 7;

const fimExpediente = 16;



/* ===========================================
        ELEMENTOS HTML
=========================================== */


const diasRestantes =
document.getElementById("diasRestantes");


const diaSemana =
document.getElementById("diaSemana");


const dataAtual =
document.getElementById("dataAtual");


const saudacao =
document.getElementById("saudacao");


const horas =
document.getElementById("horas");


const minutos =
document.getElementById("minutos");


const segundos =
document.getElementById("segundos");


const barraDia =
document.getElementById("barraDia");


const porcentagemDia =
document.getElementById("porcentagemDia");


const barraMes =
document.getElementById("barraMes");


const porcentagemMes =
document.getElementById("porcentagemMes");


const mensagem =
document.getElementById("mensagem");


const curiosidade =
document.getElementById("curiosidade");



/* ===========================================
        DATAS
=========================================== */


const nomesDias = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"

];


const nomesMeses = [

    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"

];



/* ===========================================
        VERIFICAR DIA ÚTIL
=========================================== */


function ehDiaUtil(data){

    const dia = data.getDay();


    return dia !== 0 && dia !== 6;

}




/* ===========================================
        CONTAR DIAS ÚTEIS
=========================================== */


function contarDiasUteis(inicio,fim){

    let contador = 0;


    let data = new Date(inicio);


    while(data <= fim){


        if(ehDiaUtil(data)){

            contador++;

        }


        data.setDate(
            data.getDate()+1
        );


    }


    return contador;

}





const totalDiasUteis = contarDiasUteis(

    inicioMes,

    fimMes

);




/* ===========================================
        DIAS RESTANTES
=========================================== */


function atualizarDias(){


    const hoje = new Date();


    let contador = 0;


    let data = new Date(hoje);



    while(data <= fimMes){


        if(ehDiaUtil(data)){


            contador++;


        }


        data.setDate(

            data.getDate()+1

        );


    }



    diasRestantes.innerHTML = contador;


}





/* ===========================================
        SAUDAÇÃO
=========================================== */


function atualizarSaudacao(){


    const hora = new Date().getHours();



    if(hora < 12){


        saudacao.innerHTML =
        "Bom dia ☀️";


    }

    else if(hora < 18){


        saudacao.innerHTML =
        "Boa tarde 🌻";


    }

    else{


        saudacao.innerHTML =
        "Boa noite 🌙";


    }


}





/* ===========================================
        DATA TEXTO
=========================================== */


function atualizarData(){


    const hoje = new Date();


    dataAtual.innerHTML =

    `${hoje.getDate()} de ${
    nomesMeses[hoje.getMonth()]
    } de ${hoje.getFullYear()}`;



    diaSemana.innerHTML =

    nomesDias[
        hoje.getDay()
    ];

}





/* ===========================================
        CONTADOR EXPEDIENTE
=========================================== */


function atualizarTimer(){


    const agora = new Date();


    if(!ehDiaUtil(agora)){


        horas.innerHTML="🌻";

        minutos.innerHTML="💜";

        segundos.innerHTML="✨";


        return;


    }



    const inicio = new Date();


    inicio.setHours(
        inicioExpediente,
        0,
        0,
        0
    );



    const fim = new Date();


    fim.setHours(
        fimExpediente,
        0,
        0,
        0
    );




    if(agora < inicio){


        horas.innerHTML="07";

        minutos.innerHTML="00";

        segundos.innerHTML="00";


        return;

    }





    if(agora >= fim){


        horas.innerHTML="00";

        minutos.innerHTML="00";

        segundos.innerHTML="00";


        return;


    }




    const distancia =
    fim - agora;



    const h = Math.floor(

        distancia /
        (1000*60*60)

    );



    const m = Math.floor(

        (distancia %
        (1000*60*60))
        /
        (1000*60)

    );



    const s = Math.floor(

        (distancia %
        (1000*60))
        /
        1000

    );



    horas.innerHTML =
    String(h).padStart(2,"0");


    minutos.innerHTML =
    String(m).padStart(2,"0");


    segundos.innerHTML =
    String(s).padStart(2,"0");



}





/* ===========================================
        PROGRESSO DO DIA
=========================================== */


function atualizarProgressoDia(){


    const agora = new Date();


    if(!ehDiaUtil(agora)){


        barraDia.style.width="0%";


        porcentagemDia.innerHTML =
        "Fim de semana 🌻";


        return;

    }





    const inicio = new Date();


    inicio.setHours(7,0,0,0);



    const fim = new Date();


    fim.setHours(16,0,0,0);




    let porcentagem =

    ((agora-inicio)/(fim-inicio))*100;



    porcentagem = Math.min(

        100,

        Math.max(

            0,

            porcentagem

        )

    );




    barraDia.style.width =

    porcentagem+"%";



    porcentagemDia.innerHTML =

    Math.floor(porcentagem)+

    "% concluído hoje ✨";



}





/* ===========================================
        PROGRESSO DO MÊS
=========================================== */


function atualizarProgressoMes(){


    const hoje = new Date();



    let diasPassados =

    contarDiasUteis(

        inicioMes,

        hoje

    );



    let porcentagem =

    (diasPassados /
    totalDiasUteis)
    *100;




    porcentagem = Math.min(

        100,

        porcentagem

    );



    barraMes.style.width =

    porcentagem+"%";



    porcentagemMes.innerHTML =

    Math.floor(porcentagem)+

    "% do mês concluído 🌻";



}





/* ===========================================
        ATUALIZAÇÃO GERAL
=========================================== */


function atualizarTudo(){


    atualizarSaudacao();

    atualizarData();

    atualizarDias();

    atualizarTimer();

    atualizarProgressoDia();

    atualizarProgressoMes();

    mensagem.innerHTML = buscarMensagem();

    curiosidade.innerHTML = buscarCuriosidade();


}





atualizarTudo();



setInterval(

    atualizarTudo,

    1000

);