const path = require('path');
const fs = require('fs')

module.exports = {
    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','products.json')));

        const celulares = products.filter(product => product.category === 1);
        const tablets = products.filter(product => product.category === 2);
        const computadoras = products.filter(product => product.category === 3);

        return res.render('index',{
            celulares,
            tablets,
            computadoras,
        })
    }
}