const { Client } = require('pg');

function createClient(userId) {
  // Configuración de conexión para diferentes usuarios
  const configs = {
    '1': {
      user: 'admingpx',
      password: 'user1',
    },
    '2': {
      user: 'usuario2',
      password: 'contraseña2',
    },
    '3': {
      user: 'usuario3',
      password: 'contraseña2',
    }
    // Agrega más configuraciones según sea necesario
  };

  const userConfig = configs[userId] || configs['default']; // Usa configuración por defecto si no se encuentra el ID

  const config = {
    user: userConfig.user,
    host: 'localhost',
    database: 'gamerproxela',
    password: userConfig.password,
    port: 5432,
  };

  const client = new Client(config);
  return client;
}

module.exports = createClient;
