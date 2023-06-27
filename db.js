/** Database for lunchly */
const { Client } = require("pg");
const { DB_PASS } = require("./secrets/secrets.js")

let DB_USER = 'postgres'
let DB_NAME;

if (process.env.NODE_ENV === "test") {
    DB_NAME = "lunchly_test";
} else {
    DB_NAME = "lunchly";
}


let db = new Client({
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
});


db.connect();

module.exports = db;