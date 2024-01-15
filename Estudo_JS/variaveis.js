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