function soma(x, callback){
    return setTimeout(()=>{
        return callback(null, x + 5000);
    }, 3000)

}


// callback function
function resolveSoma(err, resultado){
    if(err) throw err
    console.log(resultado)
}

console.log(soma(200, resolveSoma))