/* This file is for creating db */
import { Database } from "bun:sqlite";

const db = new Database("auth.db");


// create the user table
db.exec(`
  CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT);
`);

const insertUser = db.query("INSERT INTO users (email, password) VALUES (?,?)");
//insertUser.run("kalpa@gmail.com", "nopass");

const getUser = db.query("SELECT * FROM users WHERE email=?");
const user = getUser.get("kalpa@gmail.com");

console.log(user);
