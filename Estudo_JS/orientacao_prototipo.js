
//uso de herança no javascript no java é classe Abstrata; 

const pessoa = {
    genero: 'masculino'
}

const diogo = {
    nome: 'Diogo',
    idade: 36,
    __proto__: pessoa
}

console.log(diogo.genero)

//funçoes construtoras

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`)
}

const diana = new Pessoa('Diana', 10)

diana.falar()

// o codigo abaixo é equivalente ao codigo acima
/*
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    falar(){
        console.log(`Meu nome é: ${this.nome}`)
    }
}
*/
//----------------------------------------------

// Criando propriedades de objetos usando prototype

String.prototype.toPlang = function() {
    return `P ${this}`
}
//Plang é uma propriedade que esta sendo criada.

console.log('teste'.toPlang())