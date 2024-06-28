const ProductModel = require('../Model/product.model')
const TagsModel = require('../Model/tag.model')

const ProductController
    = {
    getAll: async (req, res) => {
        try {
            const target = await ProductModel.find().populate('tags', { title: 1 }).populate('category').exec()
            res.send(target)
        } catch (error) {
            res.send("error: " + error)
        }

    },
    get: async (req, res) => {
        try {
            const { id } = req.params
            const product = await ProductModel.findById(id).populate('tags').populate('category').exec();
            res.send(product)
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
            const { img, name, title, description, price, category, tags } = req.body;

            const existingTags = await TagsModel.find({ '_id': { $in: tags } });

            const newProduct = new ProductModel({ img, name, title, description, price, category, tags: existingTags.map(tag => tag._id) });
            await newProduct.save();

            existingTags.forEach(async (tag) => {
                tag.products.push(newProduct._id);
                await tag.save();
            });

            res.send(newProduct);
        } catch (error) {
            res.status(500).send(error);
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