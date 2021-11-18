// promise
function soma(x){
    return new Promise((resolve, reject)=>{    
        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);
    })
}

// then pega o retorno da promisse quando da certo
soma(230)
    .then((resultado)=>{
        console.log(`Resolvido, resultado: ${resultado}`)
    })