function cadastrarUsuario() {

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('pass').value;
    var senhaRp = document.getElementById('rp-pass').value;

    if(senha != senhaRp){
        document.getElementById("assist-pass").textContent="Senha não confere";
        document.getElementById("rp-pass").className = "form-control is-invalid";
        event.preventDefault();
    }
    
    else{

        const usuario = {
            nome: nome,
            email: email,
            senha: senha,
            senhaRp: senhaRp,
        };

        var json = JSON.stringify(usuario);
        localStorage.setItem(email, json);
        
        alert(`Usuário criado com sucesso:\n
        nome: ${nome}
        email: ${email}
        senha: ${senha}
        repetir senha: ${senhaRp}`);

        setTimeout(() =>{
            window.location.replace("login.html");
        });
    }
}

function validarEmail() {

    const email = document.getElementById('email').value;
    var validConfirm = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (email.match(validConfirm)){
        document.getElementById("assist-email").textContent="";
        console.log("email válido");
        event.preventDefault();
    }
    
    else{
        document.getElementById("assist-email").textContent="Email inválido. Tente novamente.";
        event.preventDefault();
        return false;
    }
}

function logarUsuario(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('pass').value;

    validarEmail();
    
    var usuario = localStorage.getItem(email);
    var data = JSON.parse(usuario);
    console.log(data); 

    if(email == data.email && senha == data.senha){
        alert("Login realizado com sucesso. Bem vindo!");
        
        setTimeout(() =>{
            window.location.replace("colecoes.html");
        });
    } 
    
    else{
        document.getElementById("email").className = "form-control is-invalid";
        document.getElementById("pass").className = "form-control is-invalid";
        alert("Dados incorretos. Tente novamente!");
        event.preventDefault();
    }
}