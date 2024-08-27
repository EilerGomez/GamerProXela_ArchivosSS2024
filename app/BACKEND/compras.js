const express = require('express');

function comprasRouter(clients) {
    const router = express.Router();

    // AGREGAR NUEVA COMPRA
    router.post('/compras', async (req, res) => {
        const { usuario, sucursal, rol } = req.body;

        if (!usuario || !sucursal || !rol) {
            return res.status(400).send('Los campos usuario, sucursal y rol son obligatorios');
        }

        const client = clients[rol]; // Obtiene el cliente del objeto dependiendo el rol del usuario que se haya logueado previamente

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query(
                'INSERT INTO compra(usuario, sucursal, fecha, total_compra) VALUES ($1, $2, CURRENT_DATE, $3) RETURNING *;',
                [usuario, sucursal, 0]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al insertar la compra: ' + err.message);
        }
    });

    // OBTENER TODAS LAS COMPRAS
    router.get('/compras', async (req, res) => {
        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select c.codigo, s.nombre AS sucursal, c.fecha, c.total_compra from bodegas.compra c join sucursales.sucursal s on(c.sucursal=s.identificacion);');
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener las compras: ' + err.message);
        }
    });

    // OBTENER UNA COMPRA POR ID
    router.get('/compras/:id', async (req, res) => {
        const { id } = req.params;
        const { rol } = req.query;

        if (!rol) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[rol]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('SELECT * FROM compra WHERE codigo = $1;', [id]);
            if (result.rows.length === 0) {
                return res.status(404).send('Compra no encontrada');
            }
            res.status(200).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al obtener la compra: ' + err.message);
        }
    });

    /*Para obtener todas las compras: GET /api/compras?rol=1
    Para obtener una compra específica: GET /api/compras/123?rol=1*/
    return router;
}

module.exports = comprasRouter;
