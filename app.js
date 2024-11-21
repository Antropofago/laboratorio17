function validarFormulario(){
    let nombre= document.getElementById("nombre").value;
    let correo= document.getElementById("email").value;

    if(nombre=="" || correo==""){
        alert("Por favor complete todos los campos !!!");
        return false;
    }
    return true;
}

function mostrarMensaje(){
    alert ("Hola eres bienvenido");
}
