const express = require('express');

function usuariosRouter(clients) {
    const router = express.Router();

    // AGREGAR NUEVO USUARIO

    // OBTENER TODOS Las SUCURSALES
    router.get('/tarjetas', async (req, res) => {
        const { roldb } = req.query;//el rol viene en la ruta

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from tarjetas.getTarjetas();');
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener las tarjetas de descuento: ' + err.message);
        }
    });


    // OBTENER Una tarjeta
    router.get('/tarjetas/:idC', async (req, res) => {
        const{idC}=req.params;
        const { roldb } = req.query;//el rol viene en la ruta

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
        if(!idC){
            return res.status(400).send('Todos los campos son obligatorios');
        }

        try {
            const result = await client.query('select * from tarjetas.getTarjetas() WHERE cliente=$1;',[idC]);
            res.status(200).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al obtener las tarjetas de descuento del cliente: ' + idC+", " + err.message);
        }
    });
    
           // AGREGAR NUEVA TARJETA
    router.post('/tarjetas/:cliente', async (req, res) => {
        const { cliente } = req.params;
        const { roldb } = req.query;

        if (!cliente) {
            return res.status(400).send('Los campos  son obligatorios');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario que se haya logueado previamente

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query(
                'call tarjetas.insertTarjetas($1);',
                [cliente]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al insertar la tarjeta: ' + err.message);
        }
    });

    /*Para obtener todas los sucuesales: GET /api/sucursales?rol=1*/
    return router;
}

module.exports = usuariosRouter;
