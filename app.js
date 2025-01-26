let amigosAdicionados = [];
let nomeEntrada = document.querySelector('input');

//Função que adiciona um amigo na lista
function adicionarAmigo(){
    let nome = nomeEntrada.value.trim();
    let rejeitados = /^[A-Za-zÀ-ÿ\s]+$/;
    if (amigosAdicionados.includes(nome)){
        alert ("Esse nome já foi adicionado");
    }
    else if (nome == ""){
        alert("Por favor, insira um nome válido");
    }
    else if (!rejeitados.test(nome)){
        alert("Por favor, insira um nome válido");
    }
    else{
        amigosAdicionados.push(nome);
        console.log(nome);
        listaHTML();
    }
    limparCampo();
}

//Função que exibe a lista de amigos na tela
function listaHTML(){
    let listaNomes = document.getElementById("listaAmigos");
    listaNomes.innerHTML = ""; 
    for (let contador = 0; contador < amigosAdicionados.length; contador+=1) {
        listaNomes.innerHTML += `<li>${amigosAdicionados[contador]}</li>`;
    }
    console.log(amigosAdicionados);
}

//Função que limpa o campo de input
function limparCampo(){
    let nomeEntrada = document.querySelector("input");
    nomeEntrada.value = "";
}

//Função que sorteia um amigo da lista
function sortearAmigo(){
    let tamanhoLista = amigosAdicionados.length;
    let resultadoNomes = document.getElementById("resultado");
    if (amigosAdicionados.length < 1){
        alert("Adicione pelo menos um amigo para sortear");
    }
    else{
    resultadoNomes.innerHTML = `O amigo secreto sorteado é: ${amigosAdicionados[Math.floor(Math.random() * tamanhoLista)]}`;
    limparLista();
    }
}

//função que limpa a lista de amigos na tela
function limparLista(){
    let listaNomes = document.getElementById("listaAmigos");
    listaNomes.innerHTML = "";
    amigosAdicionados = [];
}