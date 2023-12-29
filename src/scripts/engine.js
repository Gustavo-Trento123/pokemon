
const state = {
    views: {
        border: document.getElementsByClassName('border')[0],
        actions: document.getElementsByClassName('actions')[0],
        menuFight: document.getElementsByClassName('fight')[0],
        skillStats: document.getElementsByClassName('skill-stats')[0],
        li1: document.getElementsByTagName('li')[0],
        li2: document.getElementsByTagName('li')[1],
    },

    values: {
        menuActions: [document.getElementById('fight'), document.getElementById('pokemon'), document.getElementById('bag'), document.getElementById('run')],
        teclasPermitidas: ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Enter'],
        selecionado: 0,
        menuFight: [document.getElementById('1'),document.getElementById('2'),document.getElementById('3'),document.getElementById('4')]

    },

    actions: {
    }
}

function playSound(audioName) {
    let audio = new Audio(`./src/assets/songs/${audioName}.wav`)
    audio.volume = 0.2;
    audio.play();
}

function selecionaOpcao() {
    addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            state.views.border.style.display = 'none';
            state.views.actions.style.display = 'none';
        }

        if(e.key === 'Enter' && state.values.menuActions[0].className === 'option selected'){
            state.views.menuFight.style.display = 'grid';
            state.views.skillStats.style.display = 'flex';
            state.views.li1.style.display = 'flex';
            state.views.li2.style.display = 'flex';
            navegacaoMenu(state.values.menuFight);
        }
    })
}

function removerSelecionado(removerDoMenuEscolhido) {
        removerDoMenuEscolhido.forEach(element => {
        element.classList.remove('selected');
    });
}

function navegacaoMenu(menuEscolhido) {
    addEventListener('keydown', (event) => {

        if (state.values.teclasPermitidas.includes(event.key)) {

            if (event.key === 'ArrowUp') {
                if (state.values.selecionado >= 2) {
                    removerSelecionado(menuEscolhido);
                    state.values.selecionado = state.values.selecionado - 2;
                    menuEscolhido[state.values.selecionado].classList.add('selected');

                    playSound('menu-select');
                }
            }
            else if (event.key === 'ArrowLeft') {
                if (state.values.selecionado > 0) {
                    removerSelecionado(menuEscolhido);
                    state.values.selecionado = state.values.selecionado - 1;
                    menuEscolhido[state.values.selecionado].classList.add('selected');

                    playSound('menu-select');
                }
            }
            else if (event.key === 'ArrowDown') {
                if (state.values.selecionado <= 1) {
                    removerSelecionado(menuEscolhido);
                    state.values.selecionado = state.values.selecionado + 2;
                    menuEscolhido[state.values.selecionado].classList.add('selected');

                    playSound('menu-select');
                }
            }
            else if (event.key === 'ArrowRight') {
                if (state.values.selecionado < 3) {
                    removerSelecionado(menuEscolhido);
                    state.values.selecionado = state.values.selecionado + 1;
                    menuEscolhido[state.values.selecionado].classList.add('selected');

                    playSound('menu-select');
                }
            }
        }
    })

    selecionaOpcao();
}

function main() {
    navegacaoMenu(state.values.menuActions)
}

main()