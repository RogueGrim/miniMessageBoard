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
    console.log('messages to create')
}