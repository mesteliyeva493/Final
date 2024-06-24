const TagsModel=require('../Model/tags.model')

const TagsController
={
    getAll: async (req, res) => {
        try {
            const target = await TagsModel.find()
            res.send(target)
        } catch (error) {
            res.send("error")
        }

        
    },
    get: async (req, res) => {
        try {
            const { id } = req.params
            const found = await TagsModel.findById(id)
            res.send(found)
        } catch (error) {
            res.send("error")
        }
    },
    
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await TagsModel.findByIdAndDelete(id)
            res.send(deleted)
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req, res) => {
        try {
            const { title } = req.body
            const newTag = new TagsModel({title })
            await newTag.save()
            res.send(newTag)
        } catch (error) {
            res.send(error)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            await TagsModel.findByIdAndUpdate(id, { ...req.body })
            const updatedTag= await TagsModel.findById(id)
            res.send(updatedTag)
        } catch (error) {
            res.send(error)
        }
    },
}

module.exports = TagsController
