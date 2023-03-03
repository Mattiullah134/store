import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req, res) => {
    if (req.method == 'GET') {
        const data = await Product.find({ category: 'tonic' })
        res.status(200).json({ data })
    }
    else {
        res.status(400).json({ error: "Item not added!" })
    }
}

export default connectDb(handler);