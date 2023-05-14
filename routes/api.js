const express = require('express'); 
const router = express.Router(); 

router.get('/status', (req, res) => {
    res.json({status: true, message: "API is running...", data: ""}); 
}); 

module.exports = router;