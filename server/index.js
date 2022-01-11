const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()



app.use('/auth',require('./auth'))




app.listen(2223,()=>{console.log("2223 Workin")})