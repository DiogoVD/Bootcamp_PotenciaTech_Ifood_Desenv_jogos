
const fs = require('fs')
const cArquivo = require('path')

const arquivo = cArquivo.resolve(__dirname, 'especies em extincao.csv')

async function lerArquivos(){
    try{
        const arquivoLido = await fs.promises.readFile(arquivo)
        const texto = arquivoLido.toString('utf-8')
        const textoTitulo = (texto.split('\n').slice(0,1))[0].split(';')
        const textoString = texto.split('\n').slice(1,2)[0].split(';')
        var chaveValor = []
        
        for(i=0; i<textoTitulo.length; i++){
            chaveValor.push([textoTitulo[i], textoString[i]])
    
        }

        console.log(chaveValor)
        
    }catch(error){
        console.log(error)
    }
}
lerArquivos()