const express = require('express');
const db = require('./db');
const app = express();
import React from 'react';

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysqlTEST';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created...');
    });
});

// Create Table 
app.get('/createPostTable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.log(result);
        res.send('Post table created...');

    })
});

// Insert post 1
app.get('/addPost1', (req, res) => {
    let post = {title: 'Post One', body: 'This is post number one'}
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert post 2
app.get('/addPost2', (req, res) => {
    let post = {title: 'Post Two', body: 'This is post number two'}
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// Select posts
app.get('/getPosts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        var sqlres = results;
       
        res.send('Results...');
    });
});
// Select post
app.get('/getPost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = `+ db.escape(req.params.id)+``;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Results from post...');
    });
});

// Update post
app.get('/updatePost/:id', (req, res, fields) => {
    let newTitle = 'Updated Title';
    let sql = 'UPDATE posts SET title = ' + db.escape(newTitle) + ' WHERE id = ' + db.escape(req.params.id) +'';
    let query = db.query(sql, (err, results, fields) => {
        if (err) throw err;
        console.log(results);
        res.send('Post Updated...');
    });
});

// Delete Post
app.get('/deletePost/:id', (req, res, fields) => {
    let sql = 'DELETE FROM posts WHERE id = ' + db.escape(req.params.id) +'';
    let query = db.query(sql, (err, results, fields) => {
        if (err) throw err;
        console.log(results);
        res.send('Post Deleted...');
    });
});


app.listen('3000', () => {
    console.log('Server started on port 3000');
});



function App() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
  
  export default App;