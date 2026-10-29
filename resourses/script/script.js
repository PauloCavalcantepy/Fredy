// var area = document.querySelector("#area")

// area.addEventListener('click', clicar)
// area.addEventListener('mouseenter', entrar)
// area.addEventListener('mouseout', sair)

// function clicar(){
//     area.innerText = 'clicou!'
// }
// function entrar(){
//     area.innerText = 'entrou!'
// }
// function sair(){
//     area.innerText = 'saiu!'
// }

// var elemento = document.querySelector("#Elemento")
// elemento.addEventListener('mouseenter', entrar)
// elemento.addEventListener('mouseout', sair)

// function entrar(){
//     elemento.innerHTML = '<img width="258" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38hU3s2JLBP6wmJWgr6RxvUB6J957qQUzq_DCWHyrFJ62RMNqIa-awus5&s=10" alt="gif"</img>'
// }
// function sair(){
//     elemento.innerHTML = '<img width="258" src="https://i.pinimg.com/736x/0f/f6/21/0ff621512415fc1435203a583c5f9a93.jpg" alt="gif">'
// }





var posicao = 0;

var elementoDiv = document.querySelector('#parado');

document.addEventListener('keydown', fredy);

document.addEventListener('keyup', function() {
    elementoDiv.innerHTML = '<img src="https://i.pinimg.com/736x/0f/f6/21/0ff621512415fc1435203a583c5f9a93.jpg" alt="Personagem">';
});

function fredy(evento) {
    if (evento.code === 'ArrowRight') {
        posicao += 10;
        elementoDiv.style.left = posicao + 'px';

        elementoDiv.innerHTML = '<img src="https://http2.mlstatic.com/D_NQ_NP_646109-MLA91987836103_092025-O.web" alt="Personagem andando">';
    }
}
