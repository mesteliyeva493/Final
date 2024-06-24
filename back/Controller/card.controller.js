const CardModel=require('../Model/card.model')

const CardController
={
    getAll: async (req, res) => {
        try {
            const target = await CardModel.find()
            res.send(target)
        } catch (error) {
            res.send("error")
        }

        
    },
    get: async (req, res) => {
        try {
            const { id } = req.params
            const found = await CardModel.findById(id)
            res.send(found)
        } catch (error) {
            res.send("error")
        }
    },
    
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await CardModel.findByIdAndDelete(id)
            res.send(deleted)
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req, res) => {
        try {
            const { icon,title,description } = req.body
            const newCard = new CardModel({icon,title,description })
            await newCard.save()
            res.send(newCard)
        } catch (error) {
            res.send(error)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            await CardModel.findByIdAndUpdate(id, { ...req.body })
            const updatedCard = await CardModel.findById(id)
            res.send(updatedCard)
        } catch (error) {
            res.send(error)
        }
    },
}

module.exports = CardController
