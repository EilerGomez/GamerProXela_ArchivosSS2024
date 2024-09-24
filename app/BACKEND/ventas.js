const express = require('express');

function comprasRouter(clients) {
    const router = express.Router();

    // AGREGAR NUEVA COMPRA
    router.post('/ventas', async (req, res) => {
        const { usuario, sucursal,cliente,caja } = req.body;
        const { roldb } = req.query;

        if (!usuario || !sucursal||!cliente ||!caja) {
            return res.status(400).send('Los campos para la nueva venta son son obligatorios');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario que se haya logueado previamente

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query(
                'SELECT * FROM cajeros.insertVenta($1, $2, $3,$4);',
                [usuario, sucursal,cliente,caja]
            );
            res.status(201).json(result.rows[0]);
        } catch (err) {
            res.status(500).send('Error al insertar la venta: ' + err.message);
        }
    });

    // OBTENER TODAS LAS COMPRAS
    router.get('/ventas/:idS', async (req, res) => {
        const { idS } = req.params;

        const { roldb } = req.query;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }
        if (!idS) {
            return res.status(400).send('El campo idS es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from cajeros.getVentas($1);',[idS]);
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener las ventas: ' + err.message);
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

    //ELIMINAR UNA VENTA
    router.delete('/ventas/:idV', async (req, res) => {
        const { idV } = req.params;
        const { roldb } = req.query;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!idV) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'DELETE from cajeros.ventas where codigo=$1;',
                [ idV]
            );
    
            
            
            // Devolver el usuario eliminado
            res.status(200).json(result.rows[0]); 
        } catch (err) {
            console.error('Error al eliminar la venta:', err.message);
            res.status(500).send('Error al eliminar la ventaaa');
        }
    });

     // HACER PAGO DE UNA VENTA
     router.put('/ventasobtenerpago/:idS/:idV', async (req, res) => {
        const { idS,idV } = req.params;
        const { roldb } = req.query;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
    
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!idS ||!idV) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'select cajeros.cobrarDineroSinDescuento($1,$2);',
                [idS,idV]
            );
            
            // Devolver el usuario actualizado
            res.status(200).json(result.rows[0]); 
        } catch (err) {
            console.error('Error al actualizar dinero por cobro de venta', err.message);
            res.status(500).send('Error al actualizar dinero por cobro de ventaaa');
        }
    });


        //CANCELAR UNA VENTA
        router.delete('/ventascancelacion/:idV', async (req, res) => {
            const { idV } = req.params;
            const { roldb } = req.query;
            const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
        
            if (!client) {
                return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
            }
        
            if (!idV) {
                return res.status(400).send('Todos los campos son obligatorios');
            }
        
            try {
                const result = await client.query(
                    'CALL cajeros.cancelarVenta($1);',
                    [ idV]
                );
        
                // Devolver la venta eliminada
                res.status(200).json(result.rows[0]); 
            } catch (err) {
                console.error('Error al cancelar la venta:', err.message);
                res.status(500).send('Error al cancelar la ventaaa');
            }
        });
    /*Para obtener todas las compras: GET /api/compras?rol=1
    Para obtener una compra específica: GET /api/compras/123?rol=1*/
    return router;
}

module.exports = comprasRouter;
