frutas = ["Abacate", "Abacaxi", "Amora", "Banana", "Morango", "Laranja"];
let letrasJaUtilizadas = [];
let letrasErradas = [];
let palavraSorteada = "";

class Usuario {
    constructor(nome, email) {
        this.nome = nome,   
        this.email = email
    }
}

function criaUsuario () {
    this.nome = document.getElementById("nome").value;
    this.email = document.getElementById("email").value;
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    console.log(`Nome: ${this.nome}\nEmail: ${this.email}`);
}

function jogar () {
    palavraSorteada = frutas[Math.floor(Math.random() *frutas.length)];
    console.log(palavraSorteada);

    for (let i = 0; i < palavraSorteada.length; i++) {
        riscos.innerHTML += "_ ";
    }
}

function verificaLetra () {
    for (let i = 0; i < palavraSorteada.length; i++) {
        if (document.getElementById("letra").value == palavraSorteada[i]) {
            console.log("deu certo");
        } else {
            console.log("Letra errada");
        }
    }
}

function verificaPalavraInteira () {

}