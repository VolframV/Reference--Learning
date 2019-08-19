const mysql = require('mysql');


// create connection

const db = mysql.createConnection({
    host        :   'localhost',
    user        :   'root',
    password    :   '',
    database    :   'nodemysqlTEST'
});

// connect
db.connect((err) => {
    if(err){
            throw err;
    }
    console.log('MySql Connected...');
});

module.exports = db;