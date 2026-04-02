const { Client } = require('pg')
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 name VARCHAR (50),
 message VARCHAR (255),
 time TIMESTAMP DEFAULT NOW()
);


INSERT INTO messages (name,message)
VALUES
 ('Adele','Hello from the other side'),
 ('Rihana','Bye from the side your not on'); 
`;

async function main() {
    console.log('Seeding')
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    })

    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('Done')
}

main()