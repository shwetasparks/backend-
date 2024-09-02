const express = require("express")
require('dotenv').config()
const app = express()


app.get('/',(req,res)=>{
    res.send('hello world')
})

//get
app.get('/twitter',(req,res)=>{
    res.send('twitter')

})

app.get('/login',(req,res)=>{
    res.send('<h1>hello</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('youtube')
})

const port=4000;

app.listen(process.env.PORT,()=>{
    console.log(`example app is listening ${port}`)
})




