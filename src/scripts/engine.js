/* let mostrarTeste = document.getElementById('1');
let teste = document.querySelectorAll('.option');

mostrarTeste.textContent = teste[2].id; */


const state = {
    views: {
    },

    values: {
        menuId: [document.getElementById('1'),document.getElementById('2'),document.getElementById('3'),document.getElementById('4')],
        
        teclasPermitidas:['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'],

        selecionado: 0,
    },
    
    actions: {
    }
}

function removerSelecionado(){
    state.values.menuId.forEach(element =>{
        element.classList.remove('selected');                
    });
}

function navegacaoMenu(){
    addEventListener('keydown', (event) =>{
        
        if (state.values.teclasPermitidas.includes(event.key)){

            if(event.key === 'ArrowUp'){
                if(state.values.selecionado >= 2 ){
                    removerSelecionado();
                    state.values.selecionado = state.values.selecionado - 2;
                    state.values.menuId[state.values.selecionado].classList.add('selected');
                }
            }
            else if(event.key === 'ArrowLeft'){
                if(state.values.selecionado > 0){
                    removerSelecionado();
                    state.values.selecionado = state.values.selecionado - 1;
                    state.values.menuId[state.values.selecionado].classList.add('selected');
                }
            }
            else if(event.key === 'ArrowDown'){
                if(state.values.selecionado <= 1 ){
                    removerSelecionado();
                    state.values.selecionado = state.values.selecionado + 2;
                    state.values.menuId[state.values.selecionado].classList.add('selected');
                }
            }
            else if(event.key === 'ArrowRight'){
                if(state.values.selecionado < 3){
                    removerSelecionado();
                    state.values.selecionado = state.values.selecionado + 1;
                    state.values.menuId[state.values.selecionado].classList.add('selected');
                }
            }
        }
    })
}

function main() {
    navegacaoMenu()
}

main()