const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config({path:'./config/.env'})
const mongoose=require('mongoose')

//connect to database 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true }, (err) => {
    err ? console.log(err) : console.log('database connected')
});
//routes
app.use('/rest_api/user',require('./routes/userRout'))

app.listen(process.env.port, (err) => {
    err ? console.log(err) : console.log(`the server running on port on port ${process.env.port}`)
})
