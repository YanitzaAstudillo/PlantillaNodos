import {getAceptamos} from './services/llamadosAcep.js'
import { deleteHistorial } from './services/llamadosHist.js'


const muestra = document.getElementById("listaMostrar")
const aceptar = document.getElementById("aceptar")
const rechazar = document.getElementById("rechazar")

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
    
    //evento del boton editar al clickear//
        botonEditar.addEventListener("click",function () {
            
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