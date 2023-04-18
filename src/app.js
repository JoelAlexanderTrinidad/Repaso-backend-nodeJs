const express = require('express');
const path = require('path');
const app = express();
// const router = express.Router();
const puerto = 8080;
const indexRouter = require('./routes/indexRoutes');


// app.get('/', (req, res) => res.send('Hola'))
// app.get('/productos', (req, res) => {
//     console.log(req.url)
//     return res.send('Soy productos')
// })
// app.get('/', (req, res) => res.sendFile(path.join(__dirname,'../public/views/index.html')));

// app.use('/', router.get('/', (req, res) => res.sendFile(path.join(__dirname,'../public/views/index.html'))))
app.use('/', indexRouter)


app.use(express.static(path.join(__dirname, '../public')));


app.listen(puerto, console.log(`Servidor corriendo en http://localhost:${puerto}`));