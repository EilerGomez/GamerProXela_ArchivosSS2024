const express = require('express');
const crypto = require('crypto');


function usuariosRouter(clients) {
    const router = express.Router();



    // OBTENER PRODUCTOS SEGUN SUCURSAL
    router.get('/productos/:idS', async (req, res) => {
        const { roldb } = req.query;
        const { idS } = req.params;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from sucursales.getProductosSucursal ($1);', [idS]);
            if (result.rows.length === 0) {
                return res.status(404).send('productos no encontrado');
            }
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener la compra: ' + err.message);
        }
    });

     // OBTENER PRODUCTOS NO INLCUIDOS EN UNA SUCURSAL
     router.get('/productosnoincluidos/:idS', async (req, res) => {
        const { roldb } = req.query;
        const { idS } = req.params;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from sucursales.traerProductosNoIncluidos ($1);', [idS]);
            if (result.rows.length === 0) {
                return res.status(404).send('productos no encontrado');
            }
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener la compra: ' + err.message);
        }
    });


    // OBTENER PRODUCTOS DE LA NUEVA COMPRA
    router.get('/productoscompra/:idC', async (req, res) => {
        const { roldb } = req.query;
        const { idC } = req.params;

        if (!roldb) {
            return res.status(400).send('El campo rol es obligatorio');
        }

        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario

        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }

        try {
            const result = await client.query('select * from bodegas.verproductoscompra WHERE id_compra=$1;', [idC]);
            if (result.rows.length === 0) {
                return res.status(404).send('productos no encontrado');
            }
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).send('Error al obtener la compra: ' + err.message);
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
    



       // INSERTAR PRODUCTOS COMPRAS
    router.post('/productoscompra', async (req, res) => {
        const { roldb } = req.query;
        const { id_compra, id_producto, cantidad, precio_unitario } = req.body;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!id_compra || !id_producto || !cantidad || !precio_unitario ) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'call bodegas.insertarProductoCompra($1,$2,$3,$4);',
                [id_compra, id_producto, cantidad, precio_unitario]
            );
            res.status(201).json(result.rows[0]); 
            
        } catch (err) {
            console.error('Error al insertar usuario:', err.message);
            res.status(500).send('Error al insertar producto_compra');
        }
    });

      // INSERTAR PRODUCTOS SUCURSALES
    router.post('/productossucursal', async (req, res) => {
        const { roldb } = req.query;
        const { id_producto, id_sucursal,pasillo_bodega } = req.body;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!id_sucursal || !id_producto  || !pasillo_bodega) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'call sucursales.insertProductoSucursal($1,$2,$3,$4,$5);',
                [id_producto, id_sucursal, 0, 0,pasillo_bodega]
            );
            res.status(201).json(result.rows); 
            
        } catch (err) {
            console.error('Error al insertar producto sucursal:', err.message);
            res.status(500).send('Error al insertar producto_compra');
        }
    });

      // INSERTAR PRODUCTOS COMO TAL AL SISTEMA
    router.post('/productos', async (req, res) => {
        const { roldb } = req.query;
        const { nombre, precio_unitario_venta } = req.body;
        const client = clients[roldb]; // Obtiene el cliente del objeto dependiendo el rol del usuario
        if (!client) {
            return res.status(400).send('Usuario no conectado. Conéctese primero usando /connect/:id');
        }
    
        if (!nombre || !precio_unitario_venta) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
    
        try {
            const result = await client.query(
                'call productos.insertarNuevoProducto($1,$2);',
                [nombre, precio_unitario_venta]
            );
            res.status(201).json(result.rows); 
            
        } catch (err) {
            console.error('Error al insertar producto sucursal:', err.message);
            res.status(500).send('Error al insertar producto_compra');
        }
    });
    
    
    

    /*Para obtener todas las compras: GET /api/compras?rol=1
    Para obtener una compra específica: GET /api/compras/123?rol=1*/
    return router;
}

module.exports = usuariosRouter;
