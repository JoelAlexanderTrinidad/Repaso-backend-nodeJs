const express = require('express');
const app = express();
const puerto = 8080;

app.get('/', (req, res) => res.send('Soy el index'))

app.get('/productos', (req, res) => {
    console.log(req.url)
    return res.send('Soy productos')
})

app.listen(puerto, console.log(`Servidor corriendo en http://localhost:${puerto}`));