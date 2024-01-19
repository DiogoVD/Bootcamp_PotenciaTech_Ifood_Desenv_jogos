
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

    //Leitura de arquivos

    const fs = require('fs')

    const promessaArquivo = fs.promises.readFile('tarefas.csv')

    promessaArquivo
        .then((arquivo) => {
            console.log(arquivo.toString('utf-8'))
        })
        .catch((error) => {
            console.log('Leitura falhou')
        })
        .finally(() => {
            console.log('---------------------------------------------')
        })

// outro metodo para chamada de arquivo definindo o caminho

const fs2 = require('fs')
const path = require('path')

const caminhoArquivo = path.resolve(__dirname, 'tarefas.csv')

const promessaArquivo2 = fs2.promises.readFile(caminhoArquivo)

promessaArquivo2
    .then((arquivo) => {
        console.log(arquivo.toString('utf-8'))
    })
    .catch((error) => {
        console.log('Leitura falhou', error)
    })
    .finally(() => {
        console.log('---------------------------------------------')
    })

//--------------------------------------------------------
//Brincando com promisses

const fs3 = require('fs')
const path3 = require('path')

const caminhoArquivo3 = path3.resolve(__dirname, 'tarefas.csv')

const promessaArquivo3 = fs2.promises.readFile(caminhoArquivo3)

promessaArquivo3
    .then((arquivo3) => arquivo3.toString('utf-8'))                     //converte para string utf8
    .then((textoArquivo) => textoArquivo.split('\n').slice(1))          // pega o texto convertido em string e separa por linha e elimina o cabeçalho.
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {   // Realiza a conversão de cada linha em um array de chave valor.
        const [nome, feito] = linha.split(';')                   
            return {
                nome,
                feito: feito.trim() === 'true'  // o trim remove os espaços vazios da string
            }
    }))
    .then((listaTarefas) => console.log(listaTarefas))
    .catch((error3) => {
        console.log('Leitura falhou', error3)
    })
    .finally(() => {
        console.log('---------------------------------------------')
    })

//------------------------------------------------------------------
// Async e Await

const fs4 = require('fs')
const path4 = require('path')

const caminhoArquivo4 = path4.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo(){
    try{
        const arq = await fs4.promises.readFile(caminhoArquivo4)
        const textoArq = arq.toString('utf-8')
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        console.log(textoArq)
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

    }catch(error){
        console.log(error)

    }finally{
        console.log('---------------------------------------------')

    }
}

buscarArquivo()