const express = require('express');
const crypto = require('crypto');


function usuariosRouter(clients) {
    const router = express.Router();

    // AGREGAR NUEVO USUARIO
    
    // OBTENER TODOS LOS USUARIOS
    router.get('/usuarios', async (req, res) => {
        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from usuarios.todosusuarios;');
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener las compras: ' + err.message);
        }
    });

    // OBTENER USUARIO POR ID
    router.get('/usuarios/:id', async (req, res) => {
        const { id } = req.params;
        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('SELECT * FROM usuarios.getUserById ($1);', [id]);
            if (result.rows.length === 0) {
                return res.status(404).send('usuarios no encontrado');
            }
            res.status(200).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al obtener el usuario: ' + err.message);
        }
    });

    router.put('/usuarios', async (req, res) => {
        const { identificacion, nombre, pass, rol, sucursal,activo } = req.body;
        const { roldb } = req.query;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!identificacion || !nombre || !pass || !rol || !sucursal) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'SELECT usuarios.updateUser($1, $2, $3, $4, $5, $6);',
                [pass, nombre, rol, sucursal,activo, identificacion]
            );
    
            if (result.rowCount === 0) {
                return res.status(404).send('Usuario no encontrado o no actualizado');
            }
            
            // Devolver el usuario actualizado
            res.status(200).json(result.rows[0]); 
        } catch (err) {
            console.error('Error al actualizar usuario:', err.message);
            res.status(500).send('Error al actualizar usuario');
        }
    });

    router.delete('/usuarios/:identificacion', async (req, res) => {
        const { identificacion } = req.params;
        const { roldb } = req.query;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!identificacion) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'select usuarios.deleteUser($1);',
                [ identificacion]
            );
    
            if (result.rowCount === 0) {
                return res.status(404).send('Usuario no encontrado o no eliminado');
            }
            
            // Devolver el usuario actualizado
            res.status(200).json(result.rows[0]); 
        } catch (err) {
            console.error('Error al eliminar usuario:', err.message);
            res.status(500).send('Error al eliminar usuario');
        }
    });
    
    router.post('/usuarios', async (req, res) => {
        const { roldb } = req.query;
        const { identificacion, nombre, pass, rol, sucursal,activo } = req.body;
        const hashedPassword = crypto.createHash('md5').update(pass).digest('hex');
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!identificacion || !nombre || !pass || !rol || !sucursal) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'CALL usuarios.insertUser($1, $2, $3, $4, $5);',
                [hashedPassword, nombre, rol, sucursal,activo]
            );
    
            if (result.rowCount === 0) {
                return res.status(400).send('No se pudo insertar el usuario');
            }
            
            // Devolver el usuario insertado
            res.status(201).json(result.rows[0]); 
        } catch (err) {
            console.error('Error al insertar usuario:', err.message);
            res.status(500).send('Error al insertar usuario');
        }
    });
    
    
    

    /*Para obtener todas las compras: GET /api/compras?rol=1
    Para obtener una compra específica: GET /api/compras/123?rol=1*/
    return router;
}

module.exports = usuariosRouter;
