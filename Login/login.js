
function entrar(){
    let nombre=document.getElementById("nombre").value;
    let pass=document.getElementById("password").value;

    if(nombre=="sanchez" && pass=="12345"){

        window.location.href="../ventas/sistemaVentas.html";
        
    }else{
        alert("datos incorrectos");
    }

}