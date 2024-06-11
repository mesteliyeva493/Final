const ProductModel=require('../Model/product.model')

const ProductController
={
    getAll: async (req, res) => {
        try {
            const target = await ProductModel.find()
            res.send(target)
        } catch (error) {
            res.send("error")
        }

        
    },
    get: async (req, res) => {
        try {
            const { id } = req.params
            const found = await ProductModel.findById(id)
            res.send(found)
        } catch (error) {
            res.send("error")
        }
    },
    
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await ProductModel.findByIdAndDelete(id)
            res.send(deleted)
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req, res) => {
        try {
            const { image,name, title,description, price,category,tags } = req.body
            const newProduct = new ProductModel({ image,name, title,description, price,category,tags})
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.send(error)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            await ProductModel.findByIdAndUpdate(id, { ...req.body })
            const updatedProduct = await ProductModel.findById(id)
            res.send(updatedProduct)
        } catch (error) {
            res.send(error)
        }
    },
}

module.exports = ProductController
