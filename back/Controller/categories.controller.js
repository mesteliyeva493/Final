const CategoryModel=require('../Model/category.model')

const CategoriesController
={
    getAll: async (req, res) => {
        try {
            const target = await CategoryModel.find()
            res.send(target)
        } catch (error) {
            res.send("error")
        }

        
    },
    get: async (req, res) => {
        try {
            const { id } = req.params
            const found = await CategoryModel.findById(id)
            res.send(found)
        } catch (error) {
            res.send("error")
        }
    },
    
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await CategoryModel.findByIdAndDelete(id)
            res.send(deleted)
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req, res) => {
        try {
            const { title} = req.body
            const newCategory = new CategoryModel({ title})
            await newCategory.save()
            res.send(newCategory)
        } catch (error) {
            res.send(error)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            await CategoryModel.findByIdAndUpdate(id, { ...req.body })
            const updatedCategory= await CategoryModel.findById(id)
            res.send(updatedCategory)
        } catch (error) {
            res.send(error)
        }
    },
}

module.exports = CategoriesController
