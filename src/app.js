const express = require('express');
const path = require('path');
const app = express();
const puerto = 8080;

// app.get('/', (req, res) => res.send('Hola'))
// app.get('/productos', (req, res) => {
//     console.log(req.url)
//     return res.send('Soy productos')
// })

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'../public/views/index.html')));

app.listen(puerto, console.log(`Servidor corriendo en http://localhost:${puerto}`));