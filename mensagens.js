/* ===========================================
        MENSAGENS DO DIA
        AGOSTO 2026
=========================================== */


const mensagensDias = {


"2026-08-04":

"🌻 Segundo dia da nossa caminhada de agosto. Respira fundo, vai dar tudo certo. Cada hora que passa é um passo mais perto do descanso 💜",



"2026-08-05":

"✨ Mais um dia começando! Você já venceu muitos dias difíceis antes, esse aqui é só mais um que você vai conseguir.",



"2026-08-06":

"☀️ Quinta-feira chegou! A semana já está quase acabando. Continua firme, porque você está indo muito bem 🌻",



"2026-08-07":

"🎉 Sextou! Último esforço da semana. Logo vem aquele descanso merecido 💜",



"2026-08-10":

"🌻 Segunda-feira novamente, mas olha pelo lado bom: você já sabe que consegue. Vamos começar mais uma semana!",



"2026-08-11":

"💜 Um dia de cada vez. Não precisa carregar o mês inteiro hoje, só precisa vencer o dia de hoje.",



"2026-08-12":

"✨ Metade da semana chegando! O tempo está passando mais rápido do que parece.",



"2026-08-13":

"🌻 Quinta-feira é aquele momento em que a semana começa a mostrar que está acabando. Força!",



"2026-08-14":

"🎉 Sextou de novo! Mais uma semana vencida. Você merece aproveitar seu descanso.",



"2026-08-17":

"☀️ Nova semana, nova oportunidade. Que seu dia seja leve e cheio de coisas boas 💜",



"2026-08-18":

"🌻 Você já chegou até aqui. Olha tudo que já passou e continua firme, falta menos do que faltava.",



"2026-08-19":

"✨ Quarta-feira! O meio da semana chegou. Mais alguns passos e você estará mais perto do fim.",



"2026-08-20":

"💜 A reta final está começando. Continua, porque o resultado de todo esforço está chegando.",



"2026-08-21":

"🎉 Sexta-feira! Último dia útil da semana. Segura firme que o descanso está logo ali.",



"2026-08-24":

"🌻 Última semana de agosto começando! Agora é olhar para trás e perceber o quanto você já avançou.",



"2026-08-25":

"💜 O mês já está indo embora. Parece que começou ontem, né? Continua firme!",



"2026-08-26":

"✨ Está cada vez mais perto! Mais alguns dias e essa missão estará concluída.",



"2026-08-27":

"🌻 Quinta-feira com gosto de final. Aguenta firme, falta muito pouco agora!",



"2026-08-28":

"🎉 Última sexta-feira de agosto! Já dá para sentir o final chegando.",



"2026-08-31":

"🏆 Chegamos ao último dia! Você conseguiu passar por mais um mês. Agora é hora de respirar e aproveitar o resultado de todo esforço 💜🌻"

};





/* ===========================================
        FINAIS DE SEMANA
=========================================== */


const mensagensFimSemana = [


"😴 Hoje é pra ter pilates, mas se você vai? Veremos.😂 Aproveita seu sábado!",


"🌻 Final de semana chegou! A missão de hoje é descansar e se cuidar.",


"😂 E aí, qual vai ser o plano? Sair ou ficar em casa?",


"🍿 Filme, série ou só preguiça? Hoje está liberado!",


"☕ Sem café para a ansiedade ficar longe, mas uma música boa e zero preocupação. Aproveita!",


"💜 Hoje é dia de recarregar as energias para a próxima semana.",


"🌞 Domingo chegou... aproveita porque amanhã o despertador volta kkkkk",


"😂 O bolso agradece quando a gente fica em casa, né? Vamos economizar hoje?",


"🌻 Descanso também faz parte da jornada. Aproveite seu dia!"

];





/* ===========================================
        CURIOSIDADES
=========================================== */


const curiosidades = [


"☕ Você sabia? Uma pausa de alguns minutos pode ajudar a recuperar sua energia durante o dia.",


"🌻 Pequenos passos todos os dias geram grandes resultados no final.",


"💜 Agosto tem 31 dias, mas você não precisa vencer todos de uma vez. Só o de hoje.",


"✨ A parte mais difícil geralmente é começar. Depois o tempo passa.",


"😂 Regra do mês: trabalhar muito, reclamar um pouco e esperar o pagamento kkkkk",


"🌞 Descansar também é produtividade. Seu corpo agradece.",


"🌻 Cada dia concluído é uma pequena vitória acumulada."

];





/* ===========================================
        PEGAR DATA FORMATADA
=========================================== */


function pegarDataAtual(){


    const hoje = new Date();


    const ano =
    hoje.getFullYear();


    const mes =
    String(
        hoje.getMonth()+1
    ).padStart(2,"0");


    const dia =
    String(
        hoje.getDate()
    ).padStart(2,"0");



    return `${ano}-${mes}-${dia}`;

}





/* ===========================================
        RETORNAR MENSAGEM
=========================================== */


function buscarMensagem(){


    const data =
    pegarDataAtual();



    if(mensagensDias[data]){


        return mensagensDias[data];


    }



    const dia =
    new Date().getDay();



    if(
        dia === 0 ||
        dia === 6
    ){


        return mensagensFimSemana[
            Math.floor(
                Math.random()
                *
                mensagensFimSemana.length
            )
        ];

    }



    return "🌻 Continue firme! Cada dia vencido é uma vitória.";

}





/* ===========================================
        RETORNAR CURIOSIDADE
=========================================== */


function buscarCuriosidade(){


    const hoje = pegarDataAtual();

    const curiosidadeSalva =
    localStorage.getItem("curiosidadeDia");

    const dataSalva =
    localStorage.getItem("dataCuriosidade");


    // Se já existe uma curiosidade para hoje
    if(dataSalva === hoje && curiosidadeSalva){

        return curiosidadeSalva;

    }


    const novaCuriosidade =
    curiosidades[

        Math.floor(
            Math.random() * curiosidades.length
        )

    ];


    localStorage.setItem(
        "curiosidadeDia",
        novaCuriosidade
    );


    localStorage.setItem(
        "dataCuriosidade",
        hoje
    );


    return novaCuriosidade;

}