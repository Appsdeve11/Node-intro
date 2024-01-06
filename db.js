/** Database setup for BizTime. */

const { Client } = require('pg');

// Create a new client instance
const client = new Client({
  user: 'username',
  host: 'host',
  database: 'database',
  password: 'password',
  port: 5432, // or the port number of your PostgreSQL server
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Export the client object
module.exports = client;