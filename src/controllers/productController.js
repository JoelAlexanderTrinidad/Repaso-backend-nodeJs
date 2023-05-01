const categories = require('../data/categories.json')
const allProducts = require('../data/products.json')
const fs = require('fs')
const path = require('path')

module.exports = {
    add: (req, res) => {
        return res.render('productAdd',{
            categories
        })
    },
    save: (req, res) => {

        const {nombre, precio, categoria} = req.body

      
        const lastID = allProducts[allProducts.length - 1].id

        console.log("precio: ", typeof +precio)
        
        const newProduct = {
            id: lastID + 1,
            name: nombre,
            price: +precio,
            category: +categoria,
            img: 'no-img.png'
        }

        allProducts.push(newProduct)
        console.log(allProducts)
        
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(allProducts,null,3), 'utf-8')

        return res.redirect('/')
    },
    edit: (req, res) => {

        const { id } = req.params;
        const product = allProducts.find((product) => product.id === +id);

        return res.render('productEdit',{
            categories,
            product
        })
    },
    update: (req, res) => {

        const {id} = req.params
        const {nombre, precio, categoria} = req.body

        // return res.send(req.body)

        const productModify = allProducts.map(product => {
            if(product.id === +id){
                const productModified = {
                    ...product,
                    name : nombre,
                    price: +precio,
                    category: +categoria
                }
                return productModified
            }
            return product
        })

        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productModify,null,3), 'utf-8')

        return res.redirect('/')

    },
    remove: (req, res) => {

        const {id} = req.params
        const productRemove = allProducts.filter(product => product.id !== +id)

        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productRemove,null,3), 'utf-8')

        return res.redirect('/')
    },
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