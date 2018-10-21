const mysql = require('mysql');

const dataBase = () => {
    return mysql.createConnection({
        root: 'localhost',
        user: 'root',
        password: '',
        database: 'db_cars'
    });
}

module.exports = () => dataBase;
