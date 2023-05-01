const express = require('express');
const path = require('path');
const app = express();
const puerto = 8080;
const indexRouter = require('./routes/indexRoutes');
const productsRouter = require('./routes/productRoutes');
const logger = require('morgan')
const methodOverride = require('method-override')

app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '../public')));


app.use('/', indexRouter)
app.use('/products', productsRouter)


app.listen(puerto, console.log(`Servidor corriendo en http://localhost:${puerto}`));