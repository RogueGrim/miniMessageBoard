const db = require('../db/queries')

exports.userMessagesGet = async(req, res) => {
    const messages = await db.getAllMessages()
    res.render('index',{title:'miniMessageBoard', messages:messages})
    console.log('messages to display')
}

exports.userMessagesCreateGet = (req, res) => {
    res.render('new')
}

exports.userMessagesCreate = async(req, res) => {
    const  data  = { name: req.body.name, message: req.body.message }
    await db.insertNewMessage(data)
    res.redirect('/')
}

exports.getMessageDetails = async(req, res) => {
    const data = await db.findMessageDetail(req.params.id)
    console.log(data)
    res.render('details',{name: data[0].name, message: data[0].message, time: data[0].time})
}