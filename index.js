const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')


const port= process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})