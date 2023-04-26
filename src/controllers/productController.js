const categories = require('../data/categories.json')
const allProducts = require('../data/products.json')

module.exports = {
    getByCategory: (req, res) => {

        const {idCategory}  = req.params
        // console.log(">>>" , idCategory)

        const {name} = categories.find(category => category.id === +idCategory)
        // console.log(">>>",name)

        const products = allProducts.filter(product => product.category === +idCategory)
        // console.log(">>>>" , products)

        return res.render('categories',{
            name,
            products
        })
    },
    detail: (req, res) => {

        const { id } = req.params;
        const product = allProducts.find((product) => product.id === +id);

        console.log(">>>>" ,product)

        return res.render('productDetail',{
            product
        })
    }
}