import { postUsuarios } from "./services/llamadosAcep.js"

const enviar = document.getElementById("enviar")

//funcion asincrona para agregar nuevos datos al sistema con el POST//
enviar.addEventListener ("click", async function () {
    const prestamo = {
            "nombre": nombre.value,
            "Sede": sede.value,
            "terminos": terminos.value
    }

    await postUsuarios(prestamo,"aceptamos")
    
})
//Recorrido ordenado de elementos con metodo querySelector, evento del envio del formulario//
const formulario = document.querySelector("#formulario")

formulario.addEventListener ("submit", validarFormulario)
 
 function validarFormulario(e) {
    e.preventDefault();
    
    const respuesta = document.getElementById ("respuesta");
        respuesta.textContent = "Gracias por completar!"
        
// un sweetalert para confirmar la aceptacion de condiciones//
        Swal.fire({
            title: 'Recuerda:',
            text: 'Debes resguardar el equipo, no exponerlo!',
            confirmButtonText: 'Ok'
          });

}
