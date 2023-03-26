// funções anonimas + sintaxes;
// não precisa usar a expressao function;
// é nescessario atribuir a umas constante;
// segue adicionando parametros e a ceta gorda;
// não precisa usar retorno nem chaves;

// function normal
function soma(a,b){
    return a + b
}

// arrow-function
const soma_arrow = (a,b) => a + b

// testando mais uma vez
const par_impar = (n) =>{
    if(n % 2 == 0){
        return (`o numero ${n} é par`)
    }
    else{
        return (`o numero ${n} é impar`)
    }
}




console.log(`função convencional -> ${soma(15,25)}`)

console.log(`arrow-function -> ${soma_arrow(15,25)}`)

console.log(` numeros par ou impar -> ${par_impar(14)}`)