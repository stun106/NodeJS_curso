const express = require('express');
const app = express();

const devs = {
    nome: "José Antonio",
    idade: 29,
    skil: ["python","Js","apiRestful"]
}

app.get("/",(req,res) =>{
    res.json(devs);
});



app.listen(3000,() =>{
    console.log('Acessar http://localhost:3000')
    console.log("servidor executando na porta 3000")
})
