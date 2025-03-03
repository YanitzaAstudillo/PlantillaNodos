README
El proyecto inicia desde el Sistema (index.js) con un login para entrar a la pagina ppal, con dos unicos usuarios quemados (ubicados en db jon con llamados del "llamados.js":
usuario1 contraseña 1234
ó
usuario2 contraseña 5678

*Una vez dentro de la pag ppal, (es ahí donde se hace la division de estudiante y admin (estudiante.js / admin.js)) puede entrar tanto como estudiante:
usuario1 contraseña 1234  (para accesar al formulario) como con cualquier otro nuevo estudiante (cualquiera q le de la imaginacion).

**A diferencia del acceso para administrdores, cual unicamnte entra con:
usuario2 contraseña 5678 para poder eliminar o editar la informacion del formulario (almacenada en el db json como "aceptamos" con llamados en "llamadosAcep.js y llamadosHist") para accesar
a las solicitudes creadas en el formulario de estudiantes. Se edita el nombe y la sede (informacion suministrada en el formulario).
***Cabe acotar, que No fue la creacion de dos login, sino que quise hacer la division (est/ admin) dentro de la pag ppal, ya que me inspiré el la sub division del 
Facebook (cuando un usuario tiene otra pag dentro del face para su emprendimiento con diferentes administradores para su pag o paginas).

(En la funcion editar, solo logré editarlo en el db json pero no se refleja en pantalla. Funciona solo en el dbjson la edicion)
