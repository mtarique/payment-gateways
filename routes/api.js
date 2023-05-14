const express = require('express'); 
const router = express.Router(); 

router.get('/status', (req, res) => {
    res.json({status: true, message: "API is running...", data: ""}); 
}); 

router.post('/create-order', (req, res) => {
    const Razorpay = require('razorpay'); 
    let instance = new Razorpay({key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET})
    var options = {
        amount: 5000, 
        currency: "INR", 
        receipt: "order_rcptid_11"
    }
    instance.orders.create(options, (err, order) => {
        console.log(order)
    })
})

module.exports = router;