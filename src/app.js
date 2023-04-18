const express = require('express');
const app = express();
const puerto = 8080;

// app.get('/', (req, res) => res.send('Hola'))


app.listen(puerto, console.log(`Servidor corriendo en http://localhost:${puerto}`));