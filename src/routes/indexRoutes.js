const express = require('express');
// const path = require('path');
const indexController = require('../controllers/indexController')
const router = express.Router();


// router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../public/views/index.html')))
router.get('/', indexController.index)

module.exports = router;