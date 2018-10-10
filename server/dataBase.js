const mysql = require('mysql');

const dataBase = () => {
    return mysql.createConnection({
        root: 'localhost',
        user: 'root',
        password: '',
        database: ''
    });
}

module.exports = () => dataBase;