// configuração de express

// A PORTA É UM PROCESSO
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


app.use(bodyParser.urlencoded({ extended: true })) // 


// VAMOS AO CRUD - CREATE, READ, UPDATE, DELETE 4 OPERAÇÕES BÁSICAS EM BANCO DE DADO

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

//esse código CRIA produto baseado no GET
app.get('/produtos/:id/', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

//esse código SALVA produto baseado no Post
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})


//esse código ALTERA produto baseado no PUT
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})


// esse código EXCLUI produto baseado no DELETE
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
    })
   


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})


