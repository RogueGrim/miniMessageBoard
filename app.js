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

//middleware to render new message form
app.get('/new',(req, res)=>[
    res.render('new')
])

app.post('/new', (req, res)=>{
    const message = req.body.text;
    const name = req.body.user;
    messages.push({ id: messages.length,text: message, user: name, added: new Date()})
    res.redirect('/')
})

app.post('/',(req,res)=>{
    const id = req.body.id
    res.redirect('/details')
})

app.get('/details/:userId',(req,res)=>{
    const id  = req.params.userId
    const data = messages.find(message=> message.id == id)
    res.render('details',{user: data.user, message: data.text, added: data.added})
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})