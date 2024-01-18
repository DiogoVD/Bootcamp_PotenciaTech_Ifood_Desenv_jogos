
const promessaDeUmNumero = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() *100)
        resolve(numero)
    },1000)
})

console.log('Aguandando resolução')

promessaDeUmNumero
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('Finalizou')
    })

    //------------------------------------------------------------------