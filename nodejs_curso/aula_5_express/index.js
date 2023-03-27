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
    let id = parseInt(req.params['id'])
    console.log(id)
    let user = devs.find(user => user.id === id)
    if(!(user)){
        return res.status(404).send("Usuario não encontrado")
    }else{
        return res.send(user)
    }  
});

app.put("/update/:id", (req,res) =>{
    let id = parseInt(req.params['id'])
    let user = devs.find( user => user.id === id)
    if(!(user)){
        return res.status(404).send(`Usuario: ${user.id}, Não foi encontrado.`)
    }else{
        user.nome = req.body.nome
        user.idade = req.body.idade
        user.skil = req.body.skil
        return res.send(`Usuario: ${user.id}, dados alterado com sucesso.`)
    }
})

app.delete("/userdelete/:id", (req,res) => {
    let id = parseInt(req.params['id'])
    let index = devs.findIndex(user => user.id === id)
    if(index === -1){
        return res.status(404).send("usuário não encontrado")
    } else {
        let user = devs[index]
        devs.splice(index,1)
        return res.send(`Usuário ${user.nome} deletado com sucesso!`)
    }
});


app.listen(3000,() =>{
    console.log('Acessar http://localhost:3000')
    console.log("servidor executando na porta 3000")
})


