const express = require('express');
const app = express();

//O body-parser é um pacote utilizado para analisar o corpo das requisições HTTP.
const bodyParser = require("body-parser")
app.use(bodyParser.json())

const devs = [{
    id: 1,
    nome: "José Antonio",
    idade: 29,
    skil: ["python","Js","apiRestful"]
}]

app.get("/",(req,res) =>{
    res.json(devs);
});

app.post("/newuser", (req,res) =>{
    let idx = devs.length+1
    const newuser = {
        id: idx,
        nome: req.body.nome,
        idade:req.body.idade,
        skil:req.body.skil
    }
    devs.push(newuser)
    return res.json(newuser)
});

app.get("/user/:id", (req,res) =>{
    const id = parseInt(req.params['id'])
    console.log(id)
    const user = devs.find(user => user.id === id)
    return res.send(user)
    
});

app.listen(3000,() =>{
    console.log('Acessar http://localhost:3000')
    console.log("servidor executando na porta 3000")
})


