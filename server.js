const express = require('express')
const cors = require('cors')
const morgan = require('morgan');4
const cache = require('node-cache')
require('dotenv').config()
const databaseConnection = require("./utils/dbConnection");
const { ErrorMiddleware, ErrorResponse } = require('./middlewares/Error');
const { routers } = require('./routers');


const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))
app.use(morgan("dev"))
const cacheData = new cache({stdTTL:100})

const port = process.env.PORT || 4100

// DATABASE CONNECTION
// databaseConnection()

// CUSTOME ERROR MIDDLEWARE AND 404 APIS ROUTE
app.use(ErrorMiddleware)
app.use('*',()=>{throw new ErrorResponse("Invalid Api Call",404)})


// API ROUTES
app.use(routers)


// PORT LISTENING 
app.listen(port,()=>{
    console.log(`server is running on PORT ${port}`)
})






