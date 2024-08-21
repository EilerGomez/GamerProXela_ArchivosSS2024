const express = require('express');

function usuariosRouter(clients) {
    const router = express.Router();

    // AGREGAR NUEVO USUARIO

    // OBTENER TODOS LOS USUARIOS
    router.get('/sucursales', async (req, res) => {
        const { rol } = req.query;//el rol viene en la ruta

        if (!rol) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[rol]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            let queryST='';
            switch (rol) {
                case "1"://es administrador
                    queryST='select * from sucursales.sucursal ;'
                    break;
            
                default:
                    break;
            }
            const result = await client.query(queryST);
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener los sucursales: ' + err.message);
        }
    });

    

    /*Para obtener todas los sucuesales: GET /api/sucursales?rol=1*/
    return router;
}

module.exports = usuariosRouter;
