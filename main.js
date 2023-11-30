function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
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
    Numpad7: '#som_tecla_pom',
    Numpad8: '#som_tecla_clap',
    Numpad9: '#som_tecla_tim',

    Numpad4: '#som_tecla_puff',
    Numpad5: '#som_tecla_splash',
    Numpad6: '#som_tecla_toim',
    
    Numpad1: '#som_tecla_psh',
    Numpad2: '#som_tecla_tic',
    Numpad3: '#som_tecla_tom',
}

document.addEventListener('keydown', function(evento) {
    console.log(evento.code);
    tocaSom(TECLADO_E_SOM[evento.code]);
});