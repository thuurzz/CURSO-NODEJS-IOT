// lib que faz leitura e manipulação de arquivos
const fs = require('fs')

// passa caminho e mostra no terminal
// leitura de um arquivo
fs.readFile("texto.txt", (err, files) =>{
    if(err) throw err

    console.log(files.toString())
})