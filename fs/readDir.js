// lib que faz leitura e manipulação de arquivos
const fs = require('fs')

// passa caminho e mostra no terminal
fs.readdir("../", (err, files) =>{
    if(err) throw err

    files.forEach((file) =>{
        console.log(__dirname + file)
    })
})