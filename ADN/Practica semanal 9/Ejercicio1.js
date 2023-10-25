const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});

/// Investigué que el metodo .all crea una consulta a todos los verbos
/// HTTP(GET, POST, PUT, DELETE, etc).
app.all('/ruta', (req, res) => {
    res.send('Esta respuesta funciona para todos los verbos HTTP.');
  });
  