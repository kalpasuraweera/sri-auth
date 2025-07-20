/* This file is for creating db */
import { Database } from "bun:sqlite";

const db = new Database("auth.db");


// create the user table
db.exec(`
  CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    accessToken TEXT
  );
`);

export const insertUser = db.query("INSERT INTO users (email, password) VALUES (?,?)");
//insertUser.run("kalpa@gmail.com", "nopass");

export const updateAccessToken = db.query("UPDATE users SET accessToken = ? WHERE email = ?;");

export const getUser = db.query("SELECT * FROM users WHERE email=?");
//const user = getUser.get("kalpa@gmail.com");

