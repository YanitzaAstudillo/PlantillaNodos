
async function getHistorial() {
    try {
        const response = await fetch(`http://localhost:1919/historial`, {
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

export { getHistorial };

//////////LLAMADO POST//////////

async function postHistorial (obj,endpoint) {
    try {
        const response = await fetch(`http://localhost:1919/historial`, {
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

export{postHistorial}

//////////////LLAMADO UPDATE/////////////


async function updateHistorial (nombre,contrasena,id) 
{
    try {
     
        const userData = { 
            nombre, 
            contrasena,
            rol: "usuario",
            id
        
        };


        const response = await fetch("http://localhost:1919/historial/"+id, {
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

export{updateHistorial}



//////////////LLAMADO DELETE/////////////


async function deleteHistorial(id) {
    try {
        const response = await fetch(`http://localhost:1919/historial/${id}`, {
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

export { deleteHistorial };