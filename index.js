import express from 'express';
import pg from 'pg'
import {config} from 'dotenv'
// Crear una nueva aplicación Express

config()
const app = express();



const pool = new pg.Pool({    
        connectionString: process.env.DATABASE_URL,
        //ssl: true
    });

// Definir un puerto para nuestro servidor
const port = 3000 || process.env.PORT;

// Definir una ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo modificado');
});

app.get('/ping', async (req, res) => {

    try {
       const result = await pool.query('SELECT NOW()')
       console.log(result)
      } catch(err) {
        console.log(err);
        console.log(err.stack);
      }    
    
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});