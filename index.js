const express = require('express');

const server = express();

server.get('/index',(req, res)=>{
    res.sendFile(path.join(___dirname+'Projeto-WEB-main\index.html'));
})

server.get('/esqSenha',(req, res)=>{
    res.sendFile(path.join(___dirname+'Projeto-WEB-main\esqSenha.html'));
})

server.get('/login',(req, res)=>{
    res.sendFile(path.join(___dirname+'pythonhead\login.html'));
})

server.get('/perfil',(req, res)=>{
    res.sendFile(path.join(___dirname+'pythonhead\perfil.html'));
})

server.get('/personais',(req, res)=>{
    res.sendFile(path.join(___dirname+'pythonhead\personais.html'));
})

server.get('/registrar',(req, res)=>{
    res.sendFile(path.join(___dirname+'pythonhead\registrar.html'));
})

server.get('/tarefas',(req, res)=>{
    res.sendFile(path.join(___dirname+'pythonhead\tarefas.html'));
})

server.listen(3000)