const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router
    .get('/category/:idCategory', productController.getByCategory)
    .get('/detail/:id', productController.detail)

module.exports = router