import { postUsuarios } from "./services/llamadosAcep.js"

const enviar = document.getElementById("enviar")

enviar.addEventListener ("click", async function () {
    const prestamo = {
            "nombre": nombre.value,
            "Sede": sede.value,
            "terminos": terminos.value
    }

    await postUsuarios(prestamo,"aceptamos")
    
})

const formulario = document.querySelector("#formulario")

formulario.addEventListener ("submit", validarFormulario)
 
 function validarFormulario(e) {
    e.preventDefault();
    
    const respuesta = document.getElementById ("respuesta");
    respuesta.textContent = "Gracias por completar!"


}
