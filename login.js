const emailsalvo = "marcosviny27032005@gmail.com"
const senhasalva = "010203"


const emailDigitado = document.getElementById("email")
const senhaDigitado = document.getElementById("senha")
const msgLogin = document.getElementById("msg-login")

document.getElementById("btn-acessar").addEventListener('click',()=>{
    
    if( emailDigitado.value == emailsalvo && senhaDigitado.value == senhasalva ){
        msgLogin.textContent = "Login realizado com sucesso!"

        location.href = "index.html";
    
    }else{
        msgLogin.textContent = "Usuario ou senha incorretos!"
        msgLogin.style.color = "red"
    }

})