function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.currentTime = 0;
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento)
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}


const TECLADO_E_SOM = {
    7: '#som_tecla_pom',
    8: '#som_tecla_clap',
    9: '#som_tecla_tim',

    4: '#som_tecla_puff',
    5: '#som_tecla_splash',
    6: '#som_tecla_toim',
    
    1: '#som_tecla_psh',
    2: '#som_tecla_tic',
    3: '#som_tecla_tom',
}

document.addEventListener('keydown', function(evento) {
    console.log(evento.key);
    tocaSom(TECLADO_E_SOM[evento.key]);
});