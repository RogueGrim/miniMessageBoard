const pool = require('./pool')

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages')
    return rows
}

async function insertNewMessage(data) {
    await pool.query('INSERT INTO messages (name,message) VALUES ($1,$2)',[data.name,data.message])
}

async function findMessageDetail(id) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = ($1)',[id])
    return rows
}
module.exports = {
    getAllMessages,
    insertNewMessage,
    findMessageDetail
}