const express = require('express');

const server = express();

server.get('/index',()=>{
    console.log('Você está tentando acessar inicial')
})

server.get('/esqSenha',()=>{
    console.log('Você está tentando acessar esqueceu senha')
})

server.get('/login',()=>{
    console.log('Você está tentando acessar login')
})

server.get('/perfil',()=>{
    console.log('Você está tentando acessar perfil')
})

server.get('/personais',()=>{
    console.log('Você está tentando acessar personais')
})

server.get('/registrar',()=>{
    console.log('Você está tentando acessar registrar')
})

server.get('/tarefas',()=>{
    console.log('Você está tentando acessar tarefas')
})

server.listen(3000)