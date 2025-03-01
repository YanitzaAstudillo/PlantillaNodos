import { getUsuarios } from "./services/llamados.js"


const nombre = document.getElementById("nombre")
const contrasena = document.getElementById("contrasena")
const boton = document.getElementById("boton")

boton.addEventListener ("click", async function () {
    const usuariosRegistrados = await getUsuarios()

    for (let index = 0; index < usuariosRegistrados.length; index++) {
        if (nombre.value === usuariosRegistrados[index].nombre && contrasena.value ===usuariosRegistrados[index].contrasena){
            if (usuariosRegistrados[index].rol==="admin"){
                window.location = "adminPag.html";
            }
            }else{
                window.location = "estudiante.html";
            }
    }
})