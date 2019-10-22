const express=require('express')
const mongoose=require('./config/database')
const router = require('./config/routes')

const path = require('path')
const cors=require('cors')

// process.env.PORT ||
const port = 3001
console.log(port)

const app=express()
app.use(cors())
//const port=3005

app.use(express.json())
app.use('/', router)




app.listen(port,()=>{
    console.log('listening on port', port)
})