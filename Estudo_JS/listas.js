const lista = [1, 2, 3, 4, 5, 6, 7,8 , 9, 10]

lista.forEach(
    (value, i, listRef) => {
        console.log(value, i, listRef)
})

//-----------------------------------------

const listaDePares = lista.filter(
    (elemento) =>{
    return (elemento % 2 ===0)
})
console.log('--------------------')
console.log(listaDePares)

//----------------------------------------

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

const list = [new Pessoa('Diogo'), new Pessoa('Diana'), new Pessoa('Julia'), new Pessoa('Bel')]

const listaNomes = list.map(
    (elemento) => elemento.nome
)
/* codigo equivalente abaixo
const listaNomes = list.map(
    (elemento) => {
        return elemento.nome
    }
)
*/
console.log('--------------------')
console.log(listaNomes)

//-----------------------------------------------------------

const somaTodos = lista.reduce(
    (previous, current) => {
        return previous + current
    },0
)

console.log('--------------------')
console.log(somaTodos)

//-----------------------------------------------------------

console.log('--------------------')
console.log(lista.join('/'))

const listNom = [{nome:'Diogo'}, {nome:'Diana'}, {nome:'Julia'}]

console.log(
    listNom.map(elem => elem.nome)
        .filter((elem) => elem.startsWith('D')) //filtraos elementos iniciados com a letra D.
        .join('; ') //junta os elementos filtrados separando com ;
)