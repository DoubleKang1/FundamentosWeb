var nome = document.querySelector("#nome")
var email = document.querySelector("#email")
var assunto = document.querySelector("#assunto")
var mapa = document.querySelector("#mapa")
var nomeOk = false
var emailOk = false
var assuntoOk = false

function validarNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 2){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = 'goldenrod'
        nomeOk = false
        txtNome.style.display = 'block'
    }else{
        txtNome.style.display = 'none'
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = 'goldenrod'
        emailOk = false
        txtEmail.style.display = 'block'
    }else{
        txtEmail.style.display = 'none'
        emailOk = true
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "É permitido no máximo 100 caracteres"
        txtAssunto.style.color = 'goldenrod'
        assuntoOk = false
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
            alert("Mensagem enviada!")
    }else{
            alert("Os campos não foram preenchidos corretamente")
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}