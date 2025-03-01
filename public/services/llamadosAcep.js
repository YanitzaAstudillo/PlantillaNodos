
async function getAceptamos() {
    try {
        const response = await fetch(`http://localhost:1919/aceptamos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getAceptamos };

//////////LLAMADO POST//////////

async function postUsuarios(obj,endpoint) {
    try {
        const response = await fetch(`http://localhost:1919/aceptamos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postUsuarios}

//////////////LLAMADO UPDATE/////////////


async function updateUsuarios(nombre,contrasena,id) 
{
    try {
     
        const userData = { 
            nombre, 
            contrasena,
            rol: "usuario",
            id
        
        };


        const response = await fetch("http://localhost:1919/aceptamos/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateUsuarios}



//////////////LLAMADO DELETE/////////////


async function deleteUsuarios(id) {
    try {
        const response = await fetch(`http://localhost:1919/aceptamos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteUsuarios };