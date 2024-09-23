const express = require('express');
const cors = require('cors');
const createClient = require('./connection');
const comprasRouter = require('./compras');
const usuariosRouter = require ('./usuarios');
const sucursalesRouter=require('./sucursal')
const productosRouter=require('./productos')
const cajasRouter=require('./cajas')
const clientesRouter=require('./clientes')
const ventasRouter=require('./ventas')
const tarjetasRouter=require('./tarjetas')
const crypto = require('crypto');

const app = express();
const port = 3010;

app.use(cors());
app.use(express.json()); 

// Objeto para almacenar clientes según userId
const clients = {};

app.use('/api', comprasRouter(clients)); // Pasa el objeto de clientes al router
app.use('/api',usuariosRouter(clients));
app.use('/api',sucursalesRouter(clients));
app.use('/api',productosRouter(clients));
app.use('/api',cajasRouter(clients));
app.use('/api',clientesRouter(clients));
app.use('/api',ventasRouter(clients));
app.use('/api',tarjetasRouter(clients));
// Ruta de conexion de un usuario segun su rol
app.post('/connect', async (req, res) => {
  const {id, password, rol}=req.body;
  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

  if (clients[rol]) {
    clients[rol].end();
    delete clients[rol];//lo elimina para asegurarnos que se cierre la conexion que tenia anteriormete
    //return res.status(200).send('Usuario ya conectado');
  }

  const client = createClient(rol);
  try {
    await client.connect();
    clients[rol] = client; // Guarda el cliente en el objeto
    const result = await client.query('SELECT * from usuarios.getUser($1,$2,$3);',
      [rol,id,hashedPassword]);
    if(result.rows.length>0){
      console.log("Existe la hora es como si existe el usuario");
      res.status(200).json(result.rows[0]);
    }else{
      return res.status(404).send('usuario no encontrado');
    }
  } catch (err) {
    res.status(500).send('Error al conectar a PostgreSQL: ' + err.message);
  }
});

// Función para cerrar todas las conexiones
async function closeAllConnections() {
  for (const userId in clients) {
    if (clients[userId]) {
      await clients[userId].end();
    }
  }
  console.log('Conexiones a PostgreSQL cerradas');
}

// Ruta para desconectar todos los clientes
app.post('/disconnect', async (req, res) => {
  try {
    await closeAllConnections();
    res.status(200).send('Todas las conexiones a PostgreSQL se han cerrado');
  } catch (err) {
    res.status(500).send('Error al cerrar conexiones: ' + err.message);
  }
});

// Maneja el cierre de la conexión al detener el servidor
process.on('SIGINT', async () => {
  await closeAllConnections();
  process.exit(0); // Salir de manera segura cuando se interrumpa el servidor
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = clients;
