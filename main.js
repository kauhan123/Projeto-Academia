
function login()
{
    const login = "kauhan";
    const password = "4321";
   
    let loginDig = document.getElementById("username").value;
    let senhaDig = document.getElementById("userpassword").value;
 
    if(loginDig == login && senhaDig == password){
        window.location.href = "index.html";
        let continuarLogado = document.getElementById("lembre-me");
 
        if(continuarLogado){
            document.cookie = "logado=1";
 
        }
 
    } else{
        alert("Login inexistente");
    }
}
 
 function register(){

    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPass").value;
    let userRepeatPass = document.getElementById("userRepeatPass").value;

    if(userPass != userRepeatPass){
        alert("incorreto burro digitou errado")
    }else {
        alert("Digitou certo agora parabens")
    }
 }

 function registerPath(){
    window.location.href = "registrar.html"
}

function loginPath(){
    window.location.href = "login.html"
}

function esqSenhaPath(){
    window.location.href = "esqSenha.html";
}