const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')

const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: (req, file, callack) => {
        callack(null, 'public/images')
    },
    filename: (req, file, callack) => {
        callack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

router
    .get('/add', productController.add)
    .post('/add', upload.array('image'),productController.save)
    .get('/edit/:id', productController.edit)
    .put('/update/:id', upload.single('image'),productController.update)
    .get('/category/:idCategory', productController.getByCategory)
    .get('/detail/:id', productController.detail)
    .get('/search' , productController.search)
    .delete('/remove/:id', productController.remove)

module.exports = router