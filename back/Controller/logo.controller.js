const LogoModel=require('../Model/logo.model')

const LogoController
={
    getAll: async (req, res) => {
        try {
            const target = await LogoModel.find()
            res.send(target)
        } catch (error) {
            res.send("error")
        }

        
    },
    get: async (req, res) => {
        try {
            const { id } = req.params
            const found = await LogoModel.findById(id)
            res.send(found)
        } catch (error) {
            res.send("error")
        }
    },
    
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await LogoModel.findByIdAndDelete(id)
            res.send(deleted)
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req, res) => {
        try {
            const { img} = req.body
            const newLogo = new LogoModel({ img})
            await newLogo.save()
            res.send(newLogo)
        } catch (error) {
            res.send(error)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            await LogoModel.findByIdAndUpdate(id, { ...req.body })
            const updatedLogo= await LogoModel.findById(id)
            res.send(updatedLogo)
        } catch (error) {
            res.send(error)
        }
    },
}

module.exports = LogoController
