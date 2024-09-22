const express = require('express');

function comprasRouter(clients) {
    const router = express.Router();

    // AGREGAR NUEVO CLIENTE
    router.post('/clientes', async (req, res) => {
        const { nombre, telefono,nit } = req.body;
        const { roldb } = req.query;

        if (!nombre || !telefono||!nit) {
            return res.status(400).send('Los campos son obligatorios');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario que se haya logueado previamente

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query(
                'call clientes.insertCliente($1,$2,$3);',
                [nombre,telefono,nit]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al insertar el nuevo cliente: ' + err.message);
        }
    });

    //ACTUALIZAR UN CLIENTE
    router.put('/clientes', async (req, res) => {
        const { identificacion,nombre, telefono, nit} = req.body;
        const { roldb } = req.query;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!identificacion || !telefono || !nombre || !nit) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'SELECT clientes.updateClient($1, $2, $3, $4);',
                [identificacion,nombre, telefono, nit]
            );
    
            
            
            // Devolver el usuario actualizado
            res.status(200).json(result); 
        } catch (err) {
            console.error('Error al actualizar Cliente:', err.message);
            res.status(500).send('Error al actualizar cliente');
        }
    });
    
    // OBETEGER TODOS LOS CLIENTES
    router.get('/clientes', async (req, res) => {
        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from clientes.todosclientes;');
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener los clientes: ' + err.message);
        }
    });



   // AGREGAR NUEVA SOLICITUD PARA MODIFICAR CLIENTE
    router.post('/clientessolicitudmodificacion', async (req, res) => {
        const { usuario, sucursal,cliente,descripcion } = req.body;
        const { roldb } = req.query;

        if (!usuario || !sucursal||!cliente||!descripcion) {
            return res.status(400).send('Los campos son obligatorios');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario que se haya logueado previamente

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query(
                'call clientes.InsertsolicitudModificacionCliente($1,$2,$3,$4);',
                [usuario, sucursal,cliente,descripcion]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al insertar el nuevo cliente: ' + err.message);
        }
    });



        // OBETEGER SOLICITUDES DE MODIFICACION DE LOS CLIENTES
    router.get('/clientessolicitudmodificacion/:idU', async (req, res) => {
        const { idU } = req.params;
        const { roldb } = req.query;
    
            if (!roldb) {
                return res.status(400).send('El campo rol es obligatorio');
            }

            if(!idU){
                return res.status(400).send('El campo idU es obligatorio');
            }
    
            const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
            if (!client) {
                return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
            }
    
            try {
                const result = await client.query('select * from clientes.traerSolicitudesModClienteUsuario($1);',[idU]);
                res.status(200).json(result.rows);
            } catch (err) {
                res.status(500).send('Error al obtener las solicitudes segun usuario: ' + err.message);
            }
    });



        // OBETEGER TODAS LAS SOLICITUDES DE MODIFICACION DE LOS CLIENTES
    router.get('/clientessolicitudmodificacion', async (req, res) => {
            const { roldb } = req.query;
        
                if (!roldb) {
                    return res.status(400).send('El campo rol es obligatorio');
                }
        
                const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
        
                if (!client) {
                    return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
                }
        
                try {
                    const result = await client.query('select * from clientes.vertodassolicitudesmodificacioncliente;');
                    res.status(200).json(result.rows);
                } catch (err) {
                    res.status(500).send('Error al obtener las solicitudes todas modcliente ' + err.message);
                }
    });

    
    router.put('/clientessolicitudmodificacion/:idSM', async (req, res) => {
        const { idSM } = req.params;
        const { roldb } = req.query;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!idSM) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'select clientes.aprobarSolicitudModificacionCliente($1);',
                [idSM]
            );
            
            // Devolver el usuario actualizado
            res.status(200).json(result.rows[0]); 
        } catch (err) {
            console.error('Error al actualizar Solicitud de modificacion clienteEE:', err.message);
            res.status(500).send('Error al actualizar Solicitud de modificacion cliente');
        }
    });


    // CONFIRMAR EDICION DEL cliente
    router.put('/clientessolicitudmodificacionEditConfirm/:idSM', async (req, res) => {
        const { idSM } = req.params;
        const { roldb } = req.query;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!idSM) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'select clientes.confirmarEditarSolicitudesModificaciones($1);',
                [idSM]
            );
            
            // Devolver el usuario actualizado
            res.status(200).json(result.rows[0]); 
        } catch (err) {
            console.error('Error al actualizar Solicitud de modificacion cliente Edit:', err.message);
            res.status(500).send('Error al actualizar Edicion cliente edit');
        }
    });
    
    /*Para obtener todas las compras: GET /api/compras?rol=1
    Para obtener una compra específica: GET /api/compras/123?rol=1*/
    return router;
}

module.exports = comprasRouter;
