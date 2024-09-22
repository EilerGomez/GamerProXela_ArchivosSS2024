const express = require('express');

function comprasRouter(clients) {
    const router = express.Router();

    // AGREGAR NUEVA COMPRA
    router.post('/cajas', async (req, res) => {
        const { c_usuario, c_sucursal } = req.body;
        const { roldb } = req.query;

        if (!c_usuario || !c_sucursal) {
            return res.status(400).send('Los campos usuario, sucursal son obligatorios');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario que se haya logueado previamente

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query(
                'call cajeros.insertCajas($1,$2);',
                [c_usuario, c_sucursal]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al insertar la caja y usuario: ' + err.message);
        }
    });

    // OBETEGER TODAS LAS CAJAS
    router.get('/cajas', async (req, res) => {
        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from cajeros.traercajas;');
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener las cajas: ' + err.message);
        }
    });

    // OBTENER USUARIOS QUE NO ESTAN ASIGNADOS A CAJAS
    router.get('/cajas/:idS', async (req, res) => {
        const { idS } = req.params;
        const { roldb } = req.query;
        if (!idS) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from usuarios.traerUsuariosNoAsignadosACaja($1);', [idS]);
            if (result.rows.length === 0) {
                return res.status(404).send('no hay usuarios para trabajar en esta sucursal');
            }
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener los usuarios que no tienen cajas asignadas: ' + err.message);
        }
    });

        // OBTENER LA CAJA DE UN USUARIO
        router.get('/cajasusuario/:idU', async (req, res) => {
            const { idU } = req.params;
            const { roldb } = req.query;
            if (!idU) {
                return res.status(400).send('El campo rol es obligatorio');
            }
    
            const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
            if (!client) {
                return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
            }
    
            try {
                const result = await client.query('select * from cajeros.traerCajaDeUsuarioCajero($1);', [idU]);
                if (result.rows.length === 0) {
                    return res.status(404).send('El usuario de cajero no cuenta con una caja asignada');
                }
                res.status(200).json(result.rows[0]);
            } catch (err) {
                res.status(500).send('Error al obtener la caja del usuario cajero ' + err.message);
            }
        });

    
    /*Para obtener todas las compras: GET /api/compras?rol=1
    Para obtener una compra específica: GET /api/compras/123?rol=1*/
    return router;
}

module.exports = comprasRouter;
