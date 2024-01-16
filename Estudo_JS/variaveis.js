//o tipo da variavel muda conforme seu conteudo.

var var1 = 10;
var var2 = "texto";

console.log(var1 + var2);
console.log("----------------------------------")

//hosting - ocorre quando a variavel tem escopo global, nnormalmente a declaração var ocorre o hosting.

//ex:

console.log(var3);

var var3 = 10;

console.log(var3);

console.log("----------------------------------")

//Let - tem a mesma função do var com a diferença que ela nao permite declaração global seu escopo se restringe apenas ao bloco onde é declarado. 

//ex

if(true){
    let var4 = 5;
    console.log(var4+ " dentro escopo");
}

console.log(var4+ "fora escopo");

// na situação acima ocorre erro pq a variavel let se restringiu apenas ao bloco, onde o console funcionou dentro do bloco if e o console fora do bloco deu erro.

//const - possui valor constante nao muda.
//ex

const var5 = 15;

// Tipos de dados

// boolean - valores true e false, '' = false, 0 = false

// null - significa ausencia de valor.

// undfined - significa nao declarado.

// Number - exixtem alguns erros de calculo para aredondamentos, para resolver isso há uma biblioteca decimaljs.

// string - o uso de " ", ' ', ´´, quando se quer utilizar aspas dentro de aspas usa-se: 'ola "oi" sou eu'. ou : "ola /"oi/" sou eu"

// symbol - gera um valor imutavel e unico.

// Objetos - é declarado da seguinte forma: 
// const x = {}

//ex:

const x = {
    nome: "Diogo",
    idade: 35
}

console.log(x.nome)