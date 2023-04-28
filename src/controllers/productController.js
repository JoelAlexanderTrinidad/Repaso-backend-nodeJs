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

        return res.render('productDetail',{
            product
        })
    },
    search: (req, res) => {

        const {keyword} = req.query

        const result = allProducts.filter(product => product.name.toLowerCase().startsWith(keyword.toLowerCase()))

        return res.render('results',{
            products: result,
            keyword
        })
    }
}