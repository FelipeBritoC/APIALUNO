//importa a biblioteca
const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000
const alunos = [
    {
        id: 1,
        nome:"Viviane Diaz",
        cor: "Vermelho",
        idade: 17,
    },
    {
        id: 2,
        nome: "Daniel Ribeiro",
        cor: "Azul",
        idade: 16
    },
    {
        id:3,
        nome:"Felipinho Salvador",
        cor: "Vermelho",
        idade: 17
    },
    {
        id:4,
        nome: "Ana Clara",
        cor: "Verde",
        idade: 17,
    },
    {
        id:5,
        nome: "Vanessinha Diaz",
        cor: "Vermelho",
        idade: 24,
    },
]
app.get("/",(req, res)=>{
    res.json({
        mensagem:"Hello World"
    })
});
app.get("/alunos", (req, res)=>{
    res.json(alunos);
})
app.get("/alunos/:id", (req, res)=>{
    const id =Number(req.params.id)
    console.log(`Valor recebido ${id}`);
    const aluno = alunos.filter( (aluno)=> aluno.id === id )
    if(aluno.length > 0){
        res.status(200).json(aluno)
    }else{
        res.status(404).json({msg:"Aluno não encontrado!"})
    }
    res.status(200).json(aluno)
})
app.get("/alunos/cor/:cor", (req,res)=>{
    const cor = String(req.params.cor)
    console.log (`Valor recebido ${cor}`);
    const aluno = alunos.filter( (aluno)=> aluno.cor.toLowerCase() === cor.toLowerCase() )
    if(aluno.length > 0){
        res.status(200).json(aluno)
    }else{
        res.status(404).json({msg:"Aluno com essa cor não encontrado!"})
    }
    res.status(200).json(alunosF)
    res.status(404).json({msg: "Nenhum aluno foi encontrado com essa cor"})
})
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})