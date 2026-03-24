const express = require('express')
const path = require('node:path')
const { messages }  = require('./data')

const app = express()

app.set('views',path.join(__dirname,'views')) //look for templates in the views directory
app.set('view engine','ejs')    //sets the view engine to ejs

app.use(express.urlencoded({extended: true}))

//index middleware
app.get('/',(req, res)=>{
    res.render('index',{title:'Mini-Message Board', messages:messages})
})

app.get('/new',(req, res)=>[
    res.render('new')
])

app.post('/new', (req, res)=>{
    const message = req.body.text;
    const name = req.body.user;
    messages.push({text: message, user: name, added: new Date()})
    res.redirect('/')
})
const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})