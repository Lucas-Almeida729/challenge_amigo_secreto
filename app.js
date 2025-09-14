let amigos = [];

const inputAmigo = document.getElementById('amigo');
const listaAmigosUl = document.getElementById('listaAmigos');
const resultadoUl = document.getElementById('resultado');

const btnSortear = document.querySelector('.button-draw');
const btnReiniciar = document.getElementById('btnReiniciar'); 


function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim().toUpperCase();
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido para adicionar.');
        return;
    }
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, digite um nome diferente.');
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    exibirListaAmigos();

    resultadoUl.innerHTML = '';
    btnSortear.disabled = false;
    
    atualizarEstadoBotoes(); 
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    exibirListaAmigos();
    resultadoUl.innerHTML = '';
    btnSortear.disabled = false;
    atualizarEstadoBotoes();
}

function exibirListaAmigos() {
    listaAmigosUl.innerHTML = '';
    if (amigos.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhum amigo adicionado ainda.';
        li.style.fontStyle = 'italic';
        li.style.color = '#888';
        listaAmigosUl.appendChild(li);
    } else {
        amigos.forEach((amigo, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${amigo}</span>
                <button class="button-remove" data-index="${index}">X</button>
            `;
            const btnRemover = li.querySelector('.button-remove');
            btnRemover.addEventListener('click', () => removerAmigo(index));
            listaAmigosUl.appendChild(li);
        });
    }
}

function atualizarEstadoBotoes() {
    btnReiniciar.disabled = amigos.length === 0;
}


function sortearAmigo() {
    if (amigos.length < 3) {
        alert('São necessários pelo menos 3 amigos para realizar o sorteio!');
        return;
    }

    resultadoUl.innerHTML = '';
    const amigosParaPresentear = [...amigos];
    let sorteioValido = false;
    let tentativas = 0;
    const maxTentativas = 1000;
    let sorteiosResultados = {};

    while (!sorteioValido && tentativas < maxTentativas) {
        tentativas++;
        sorteioValido = true;
        for (let i = amigosParaPresentear.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [amigosParaPresentear[i], amigosParaPresentear[j]] = [amigosParaPresentear[j], amigosParaPresentear[i]];
        }
        for (let i = 0; i < amigos.length; i++) {
            const tirador = amigos[i];
            const presenteado = amigosParaPresentear[i];
            if (tirador === presenteado) {
                sorteioValido = false;
                break;
            }
            sorteiosResultados[tirador] = presenteado;
        }
    }

    if (!sorteioValido) {
        alert('Não foi possível realizar um sorteio válido após muitas tentativas. Tente novamente ou altere os nomes.');
        console.warn('Sorteio não pôde ser validado após muitas tentativas.');
        return;
    }

    for (const tirador in sorteiosResultados) {
        const presenteado = sorteiosResultados[tirador];
        const li = document.createElement('li');
        li.textContent = `${tirador} tirou ${presenteado}!`;
        resultadoUl.appendChild(li);
    }
    
    btnSortear.disabled = true;
    btnReiniciar.disabled = false;
}

function reiniciarSorteio() {
    amigos = [];
    inputAmigo.value = '';
    inputAmigo.focus();
    exibirListaAmigos();
    resultadoUl.innerHTML = '';
    
    btnSortear.disabled = false;
    btnReiniciar.disabled = true;
}


document.addEventListener('DOMContentLoaded', () => {
    exibirListaAmigos();
    atualizarEstadoBotoes();
    inputAmigo.focus();
    btnSortear.disabled = false;
});

inputAmigo.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});