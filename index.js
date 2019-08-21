const express=require('express')
const mongoose=require('./config/database')
const router = require('./config/routes')

const path = require('path')

const port = process.env.PORT || 3001

const app=express()
//const port=3005

app.use(express.json())
app.use('/', router)




    app.listen(port,()=>{
    console.log('listening on port', port)
})