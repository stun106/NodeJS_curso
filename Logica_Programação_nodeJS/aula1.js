let valor = 1500
let desconto1 = valor * 20 / 100
let desconto2 = valor * 30 / 100
let escolha = "produto verde"

if(escolha === "produto verde"){
    let valorDesconto = valor - desconto1
    console.log(` valor do produto1: ${valorDesconto}`)
}else
    if(escolha === "produto azivis"){
        let valorDesconto = valor - desconto2
        console.log(` valor do produto2: ${valorDesconto}`)
    }