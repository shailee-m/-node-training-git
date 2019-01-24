var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'shailee',
  database : 'learning_node'
});
 
connection.connect();


module.exports = connection;