const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "app2-sqy271",
    waitForConnections: true,
    connectionLimit: 10,
    queue: 0
})

pool.connect((err) => (
    if (eerr)
))