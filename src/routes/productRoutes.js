const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router
    .get('/add', productController.add)
    .post('/add', productController.save)
    .get('/category/:idCategory', productController.getByCategory)
    .get('/detail/:id', productController.detail)
    .get('/search' , productController.search)

module.exports = router