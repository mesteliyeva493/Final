const TeaModel=require('../Model/tea.model')

const TeaController={
    getAll: async (req, res) => {
        try {
            const target = await TeaModel.find()
            res.send(target)
        } catch (error) {
            res.send("error")
        }

        
    },
    get: async (req, res) => {
        try {
            const { id } = req.params
            const found = await TeaModel.findById(id)
            res.send(found)
        } catch (error) {
            res.send("error")
        }
    },
    
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await TeaModel.findByIdAndDelete(id)
            res.send(deleted)
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req, res) => {
        try {
            const { image,name, title,description, price } = req.body
            const newProduct = new TeaModel({ image,name, title,description, price})
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.send(error)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            await TeaModel.findByIdAndUpdate(id, { ...req.body })
            const updatedProduct = await TeaModel.findById(id)
            res.send(updatedProduct)
        } catch (error) {
            res.send(error)
        }
    },
}

module.exports = TeaController