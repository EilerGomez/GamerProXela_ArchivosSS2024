const express = require('express');

function reportesRouter(clients) {
    const router = express.Router();

    

    // OBTENER DESCUENTOS EN CIERTO TIEMPO
    router.get('/reporte1/:de/:hasta', async (req, res) => {
        const { de,hasta } = req.params;

        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }
        if (!de||!hasta) {
            return res.status(400).send('Los campos son obligatorios');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from admin.getDescuentosXTiempo($1,$2);',[de,hasta]);
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener el reporte 1: ' + err.message);
        }
    });


        // OBTENER VENTAS MAS GRANDES EN CIERTO TIEMPO
        router.get('/reporte2/:de/:hasta', async (req, res) => {
            const { de,hasta } = req.params;
    
            const { roldb } = req.query;
    
            if (!roldb) {
                return res.status(400).send('El campo rol es obligatorio');
            }
            if (!de||!hasta) {
                return res.status(400).send('Los campos son obligatorios');
            }
    
            const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
            if (!client) {
                return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
            }
    
            try {
                const result = await client.query('select * from admin.get10VentasMasGrandesXTiempo($1,$2);',[de,hasta]);
                res.status(200).json(result.rows);
            } catch (err) {
                res.status(500).send('Error al obtener el reporte 2: ' + err.message);
            }
        });

      // OBTENER get2SucursalesConMasIngreso
    router.get('/reporte3', async (req, res) => {

        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from admin.get2SucursalesConMasIngreso();');
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener el reporte 3: ' + err.message);
        }
    });



      // OBTENER get10ArticulosMasVendidos
      router.get('/reporte4', async (req, res) => {

        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from admin.get10ArticulosMasVendidos();');
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener el reporte 4: ' + err.message);
        }
    });

// OBTENER get10ClientesQueHanGastadoMas
    router.get('/reporte5', async (req, res) => {

            const { roldb } = req.query;
    
            if (!roldb) {
                return res.status(400).send('El campo rol es obligatorio');
            }
    
            const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
            if (!client) {
                return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
            }
    
            try {
                const result = await client.query('select * from admin.get10ClientesQueHanGastadoMas();');
                res.status(200).json(result.rows);
            } catch (err) {
                res.status(500).send('Error al obtener el reporte 4: ' + err.message);
            }
        });

    /*Para obtener todas las compras: GET /api/compras?rol=1
    Para obtener una compra específica: GET /api/compras/123?rol=1*/
    return router;
}

module.exports = reportesRouter;
