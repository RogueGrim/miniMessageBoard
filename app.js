const express = require('express')
const path = require('node:path')
const { messages }  = require('./data')

const app = express()

app.set('views',path.join(__dirname,'views')) //look for templates in the views directory
app.set('view engine','ejs')    //sets the view engine to ejs

//index middleware
app.get('/',(req, res)=>{
    res.render('index',{title:'Mini-Message Board', messages:messages})
})
const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})