

// function declaration
function funcao1(){
    console.log('Função 1')
}

funcao1()

//function expression
const funcao2 = function(){
    console.log('Função 2')
}
funcao2()

//Declaração explicita
//deixa utilizar o contexto this em sua execução
function funcao3(){
    console.log('Função 3')
}
funcao3()

//Declaração com arrow function
//esta nao deixa utilizar o contexto this.

const funcao4 = () => {
    console.log('funcao4')
}
funcao4()

//Closures
function soma(x){
    return function (y) {
        return x + y;
    }
}

//Chamada do metodo 
console.log(soma(10)(20))

// chamada do metodo com tratamento parcial automaticamente guarda o valor de x.
const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

//equivalencia com arrow function
function soma2(x){
    return (y) => {
        return x + y;
    }
}
console.log('------------')
console.log(soma2(10)(20))


//uso do Apply e do call

const pessoa = {
    nome: 'Diogo',
    idade: 36,
}

function gritar(prefixo){
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa,['Olaaaaaa'])
gritar.call(pessoa, 'Olaaaaa')
