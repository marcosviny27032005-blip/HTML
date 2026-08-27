const BANCO_USUARIO = "usuariosCadastro";
document.getElementById("btn_cadastrar").addEventListener('click',()=>{
    const novoUsuario = {
        nome: document.getElementById("nome").value,
        email:document.getElementById("email").value,
        usuario:  document.getElementById("usuario").value,
        senha:  document.getElementById("senha").value,
        confirmaSenha:  document.getElementById("confirmar-senha").value
    };

    if( novoUsuario.senha != novoUsuario.confirmaSenha){
        const msgErro = document.getElementById("msg-erro");
        msgErro.textContent = "As senhass não coincidem, Tente novamente"
        msgErro.style.color = "red";

        return;
    }

    localStorage.setItem(BANCO_USUARIO, JSON.parse(novoUsuario)); alert("Usuario cadastrado com sucessop!");
    location.href = "login.html";





})