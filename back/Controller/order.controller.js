const OrderModel = require("../Model/order.model")

const OrderController = {
    getAll: async (req, res) => {
        try {
            const orders = await OrderModel.find({})
            res.status(200).send(orders)

        } catch (err) {
            res.status(404).send('Error In Getting All Orders' + err)
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params
            const order = await OrderModel.findById(id)
            res.status(200).send(order)

        } catch (err) {
            res.status(404).send('Error In Getting One Order' + err)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleteOrder = await OrderModel.findByIdAndDelete(id)
            res.send(deleteOrder)

        } catch (err) {
            res.status(404).send('Error In Deleting Order' + err)
        }
    },
    add: async (req, res) => {
        try {
            const newOrder = new OrderModel(req.body)
            await newOrder.save()
            res.status(200).send(newOrder)
        } catch (err) {
            res.status(404).send('Error In Posting Order' + err)
        }
    },
    updateStatus: async (req, res) => {
        try {
            const productId = req.params.id;
            const { status } = req.body;

            const order = await OrderModel.findById(productId);
            if (!order) {
                return res.status(404).send('Order not found');
            }
            order.status = status

            await OrderModel.findByIdAndUpdate(
                productId,
                { $set: { status: order.status } },
                { new: true }
            );
            const oneOrder = await OrderModel.findById(productId);

            res.status(200).send(oneOrder);
        } catch (err) {
            res.status(500).send('Error In Updating Order Status: ' + err);
        }
    },
}

module.exports = OrderController