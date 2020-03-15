const express = require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
    password: 'hyfpassword',
    database: 'nodemysql'
});

//connect
db.connect((err) => {
	if (err) {
		throw err;
	} else {
		console.log('mysql is connected');
	}
});

const app = express();

//create DB
app.get('/createDB', (req, res) => {
	let sql = 'CREATE DATABASE nodemysql';
	db.query(sql, (err, result) => {
		if (err) throw err;
		res.send('database is created....');
		console.log(result);
	});
});

//create table
app.get('/createpoststable', (req, res)=>{
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title varchar(50), body varchar(255), PRIMARY KEY (id))';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('post table is created....')
    })
})

//insert post 1
app.get('/addpost1', (req, res)=>{
    let post = {title: 'post one ', body : 'this is post number one '}
    let sql = 'INSERT INTO posts SET ?'// this question mark is like a place holder for what we put after sql 
    let query = db.query(sql, post, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('post 1 is add...')
    })
})

//insert post 2
app.get('/addpost2', (req, res)=>{
    let post = {title: 'post two ', body : 'this is post number two '}
    let sql = 'INSERT INTO posts SET ?'// this question mark is like a place holder for what we put after sql 
    let query = db.query(sql, post, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('post 2 is add...')
    })
})

// get posts from database 
app.get('/getposts', (req, res)=>{
    let sql = 'select * from posts'; 
    let query = db.query(sql,(err, results)=>{
        if (err) throw err;
        console.log(results);
        res.send('posts fetched');
    })
})

// get one post
app.get('/getpost/:id', (req, res)=>{
    let sql = `select * FROM posts WHERE id = ${req.params.id}`
    let query = db.query(sql,(err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('post fetched');
    })
})

// update post
app.get('/updatepost/:id', (req, res)=>{
    let newTitle = 'Updated title'
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`; 
    let query = db.query(sql,(err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('title updated');
    })
})

// delete post
app.get('/deletepost/:id', (req, res)=>{
    let newTitle = 'Updated title'
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`; 
    let query = db.query(sql,(err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send('post deleted');
    })
})






app.listen('3000', () => {
	console.log('server is running on 3000');
});
