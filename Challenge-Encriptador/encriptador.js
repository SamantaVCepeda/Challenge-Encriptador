function encriptar(){
    var texto = document.querySelector(".textarea").value.toLowerCase();
    var texto = texto.replace(/á/img, "a");
    var texto = texto.replace(/é/img, "e");
    var texto = texto.replace(/í/img, "i");
    var texto = texto.replace(/ó/img, "o");
    var texto = texto.replace(/ú/img, "u");
    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textarea2").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display ="show";
    document.getElementById("copiar").style.display ="inherit";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("parrafoA").style.display = "none";
    document.getElementById("parrafoB").style.display = "none";
}

function desencriptar(){
    var textoEncriptado = document.querySelector(".textarea").value.toLowerCase();
    var textoDesencriptado = textoEncriptado.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/fat/img, "u");

    document.getElementById("textarea2").innerHTML = textoDesencriptado;
}

function copiar(){
    var textoCopiado = document.querySelector("#textarea2");
    textoCopiado.select();
    document.execCommand("copy");
}