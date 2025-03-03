import { getUsuarios } from "./services/llamados.js"


const nombre = document.getElementById("nombre")
const contrasena = document.getElementById("contrasena")
const boton = document.getElementById("boton")

// obtencion de datos con get al evento del click//
boton.addEventListener("click",async function(e) {
    e.preventDefault()
    let datos = await getUsuarios()
    
    
//una vez obtenidos los datos se redirige al login sino un sweetalert//
    datos.forEach((datos)=>{
       if (nombre.value === datos.nombre && contrasena.value === datos.contrasena) {
            console.log("son los datosss");
            function Redirect() {
                window.location = "login.html";
                }
                setTimeout(function() {
                Redirect();
                }, 300);
       }else{
        Swal.fire({
            title: 'Credenciales incorrectas',
            text: 'rellenar datos',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          
       }
    })

 

   
});

