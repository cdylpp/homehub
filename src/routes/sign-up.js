const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql2/promise');
const hashFunction = require('../scripts/utils').generateId;

router.get('/', (req, res) => {
    res.render('sign-up', {title: 'sign-up'})
});


async function createConnection(){
    return conn = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: process.env.SQL_PASSWORD,
        database: 'homehub_web_app',
    })
}

async function insertMember(id, first, last, email, username, password){
    const conn = await createConnection();
    const insertQuery = `INSERT INTO members (id, first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?, ?)`;
    await conn.execute(insertQuery, [id, first, last, email, username, password], (err, res) => {
        if (err) throw err;
        console.log(res);
    });
    await conn.end();
};

async function queryAccount(id) {
    if (id == null || id == ""){
        return false;
    }

    const conn = await createConnection();
    const selectQuery = 'SELECT COUNT(*) AS count FROM homehub_home_accts WHERE id = ?';
    let exists = await conn.execute(selectQuery,[id]).then( async res => res);
    console.log(exists);
    await conn.end()
    return (exists) ? true : false;
};

async function insertAccount(id, name){
    const conn = await createConnection();
    const insertQuery = `INSERT INTO homehub_home_accts (id, time_zone, name) VALUES (?, ?, ?)`;
    conn.execute(insertQuery, [id, 'America/San Diego', `${name}'s Home`], (err, res) =>{
        if (err) throw err;
        console.log(res);
    })
    await conn.end();
};


async function insertAccountMembers(account_id, member_id, isAdmin){
    const conn = await createConnection();
    const insert = `INSERT INTO home_members (homehub_home_id, member_id, isAdmin) VALUES(?, ?, ?)`;
    await conn.execute(insert, [account_id, member_id, isAdmin], (err, res) => {
        if (err) throw err;
        console.log(res);
    });
    await conn.end();
};


router.post('/', async (req, res) => {
    const { firstName, lastName, email, usrname, pswd, link} = req.body;
    // create new member and account
    const member_id = hashFunction(usrname);
    await insertMember(member_id, firstName, lastName, email, usrname, pswd);

    let validLink = queryAccount(link);
    let account_id;

    if (validLink){
        // add to existing 
        account_id = validLink;
        await insertAccountMembers(account_id, member_id, false); 
    } else {
        // create new
        account_id = member_id + usrname;
        
        await insertAccount(account_id, firstName);
        await insertAccountMembers(account_id, member_id, true);
    }
    // Log first name, last name, and email
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    // Check if username is valid
    console.log('Username:', usrname);
    // Check if password is valid
    console.log('Password:', pswd);
    // Look up link, if valid link, add memeber to exisiting homehub
    console.log('Existing Link:', link);
    console.log('Member ID: ', member_id);
    console.log('Account ID: ', account_id);
    res.send('Account Activation Successful!')
});

module.exports = router;

