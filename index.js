const express = require('express'); 
const dotenv = require('dotenv'); 
const path = require('path'); 
const app = express(); 

dotenv.config(); 

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

app.use('/api', require('./routes/api')); 

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening at ${process.env.PORT}`); 
})