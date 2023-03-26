let dados = []
for(var x = 0; x < 20; x++){
    if(x % 2 == 0){
        dados.push(x)
    }
}
console.log(dados)
/*usando forEach para iterar um array, a função exige que vc passe um parametro
para a função lambda chamar o resultado*/
dados.forEach(element => {
    console.log(element)
});