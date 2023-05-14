const express = require('express'); 
const dotenv = require('dotenv'); 
const path = require('path'); 
const morgan = require('morgan'); 
const app = express(); 

dotenv.config(); 

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, '/public'))); 
app.use(morgan('dev')); 

app.use('/api', require('./routes/api')); 

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on ${process.env.PORT}`); 
})