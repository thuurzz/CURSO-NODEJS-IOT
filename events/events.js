// faz o require da lib nativa events, para gerar um evento
const EventEmitter = require("events")

// Extende a classe para herdar atributos e métodos
class Evento extends EventEmitter{}

// Cria o objeto da classe
const meuEvento = new Evento()

// "No ON a gente cria o evento"
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'seguranca': ${x} ${y}`)
})

// Emite um evento que vai chamar o evento criado
meuEvento.emit('seguranca', 'userAdmin', 'Aletrou salário')