import {getAceptamos} from './services/llamadosAcep.js'
import { deleteHistorial } from './services/llamadosHist.js'
import { updateHistorial } from './services/llamadosHist.js'


const muestra = document.getElementById("listaMostrar")


//funcion para mostrar nombre y sede ingresados en formulario de Estudiantes//
mostrar()

    async function mostrar() {
        
        let resp = await getAceptamos()
console.log("recibido", resp);

   //reflejado en pantalla //     
        for (let index = 0; index < resp.length; index++) {
            let u = document.createElement ("u")
            u.textContent = resp[index].nombre + " " + resp[index].Sede
            u.textContent
            u.style.display = "block"

    // creacion de botones con sus respectivos estilos//
            let botonEditar = document.createElement("button")
                botonEditar.textContent="Editar"
                botonEditar.style.display= "block"
                botonEditar.style.marginTop= "15px"
                botonEditar.style.borderRadius= "5px"
            
        
            let botonEliminar = document.createElement("button")
                botonEliminar.textContent= "Eliminar"
                botonEliminar.style.display= "block"
                botonEliminar.style.marginTop= "10px"
                botonEliminar.style.borderRadius= "5px"
            
            muestra.appendChild(u)
            muestra.appendChild(botonEditar)
            muestra.appendChild(botonEliminar)
    
    //evento del boton editar al clickear creacion de la nueva edicion en patalla//
        botonEditar.addEventListener("click", () => {
            let inputNombre = document.createElement("input")
            let inputSede = document.createElement("input")
            let buttonRespuesta = document.createElement("button")
            buttonRespuesta.textContent = "Confirmar edición"

            u.appendChild(inputNombre)
            u.appendChild(inputSede)
            u.appendChild(buttonRespuesta)

            inputNombre.value = resp[index].nombre
            inputSede.value = resp[index].Sede


            buttonRespuesta.addEventListener("click",async function() {
                let actUsuario = {
                    "nombre":inputNombre.value,
                    "Sede":inputSede.value
                }
                await updateHistorial(actUsuario.nombre,actUsuario.Sede,resp[index].id)
            })
            
        });

    //evento boton eliminar removiendolo del historial//
        botonEliminar.addEventListener("click",function () {
            if (confirm ("Seguro de que deseas eliminar?")){
                deleteHistorial (resp [index].id)

                muestra.removeChild(u)
                muestra.removeChild(botonEditar)
                muestra.removeChild(botonEliminar)
            }
            })
    }

}