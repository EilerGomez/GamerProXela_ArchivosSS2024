const express = require('express');

function usuariosRouter(clients) {
    const router = express.Router();


    // OBTENER TODAS LAS SOLICITUDES
    router.get('/solicitudestarjetas', async (req, res) => {
        const { roldb } = req.query;//el rol viene en la ruta

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from tarjetas.getSolicitudesTarjetas();');
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener las solicitudes de tarjetas: ' + err.message);
        }
    });

    
    // AGREGAR NUEVA SOLICITUD TARJETA
    router.post('/solicitudestarjetas', async (req, res) => {
        const { cliente,motivo,descripcion } = req.body;
        const { roldb } = req.query;

        if (!cliente||!motivo||!descripcion) {
            return res.status(400).send('Los campos  son obligatorios');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario que se haya logueado previamente

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query(
                'call tarjetas.insertSolicitudTarjetas($1,$2,$3);',
                [ cliente,motivo,descripcion]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al insertar la tarjeta solicitud: ' + err.message);
        }
    });

    // CAMBIAR TIPO DE TARJETA
    router.post('/solicitudestarjetasupdate', async (req, res) => {
        const { solicitud,cliente,motivo,fechamod } = req.body;
        const { roldb } = req.query;
        console.log(solicitud + " m: "+motivo + ". f " +fechamod);

        if (!solicitud||!cliente||!motivo||!fechamod) {
            return res.status(400).send('Los campos  son obligatorios');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario que se haya logueado previamente

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
        

        try {
            const result = await client.query(
                'SELECT tarjetas.cambiarTipoTarjeta($1,$2,$3,$4);',
                [ cliente,motivo,fechamod,solicitud]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al actualizar el tipo de tarjeta: ' + err.message);
        }
    });

    /*Para obtener todas los sucuesales: GET /api/sucursales?rol=1*/
    return router;
}

module.exports = usuariosRouter;
