console.log(`Nome do Arquivo:`, __filename)
console.log(`Diretório do Arquivo:`, __dirname)
console.log(`Parâmetros de execução:`, process.argv)
console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Usuário do SO: `, process.env.USERNAME)
console.log(`Idioma do SO: `, process.env.LANG)
console.log(`Nome do server: `, process.env.COMPUTERNAME)
console.log(`Ambiente do servidor:`, process.platform)

// Switch para pegar os argumentos na chamada do programa com o argsv[]
switch(process.argv[2]){
    case "-a":
        console.log("Execute o programa principal")
        break
    case "-i":
        console.log("Execute a instalação")
        break
    case "-q":
        console.log("Encerrando a aplicação")
        process.exit() // interrompe imediatamente o código
        break
    default:
        console.log("Parâmetro inválido")
}
