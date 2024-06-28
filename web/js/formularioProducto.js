var enviarDatos=0;

var nombre=document.getElementById("nombre");

var celular=document.getElementById("celular");

var correo=document.getElementById("correo");


var formularioP=document.getElementById("formularioP");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(enviarDatos);
    if(enviarDatos > 0){
    } 
    else{
        formularioP.submit();
    }
});


var formularioP=document.getElementById("formularioP");

formularioP.addEventListener("submit", (e)=>{
    e.preventDefault();
    var avanzar=0;
    if(avanzar=1){
        formulario.submit();
    }
})