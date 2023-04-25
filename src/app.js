const express = require('express');
const path = require('path');
const app = express();
// const router = express.Router();
const puerto = 8080;
const indexRouter = require('./routes/indexRoutes');

app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'ejs');


app.use('/', indexRouter)
app.use(express.static(path.join(__dirname, '../public')));


app.listen(puerto, console.log(`Servidor corriendo en http://localhost:${puerto}`));