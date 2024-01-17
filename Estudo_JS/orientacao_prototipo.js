
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