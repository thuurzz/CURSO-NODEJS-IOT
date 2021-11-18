// Função com promise
function sum(x){
    return new Promise((resolve, reject)=>{    
        if (Number(x == NaN || Number(x == undefined || typeof x != "number"))){
            reject("Tá de brincadeira?")
        }
        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);
    })
}
// Função main chamando a função com await
async function main(){
   try {
        const res = await sum("#")
        console.log(`Resultado com Async/Await: ${res}`)
   }
    catch (error){
        console.log(`Temos um problema: ${error}`)
    }
}
main()

