//Node Connection to MySQL
const mysql = require("mysql");

// Set up our connection information
let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection( {
		host: 'localhost',
		user: 'root',
		password: 'Middlebass!6',
		database: 'burgers_db'
	});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;