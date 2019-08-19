////////////////////////////////////// F I L E ___ S Y S T E M ////////////////////////////
const fs = require('fs');
const path = require('path');

//create folder || Asyncronous, can be syncronous if used .mkdirSync
fs.mkdir(path.join(__dirname, '/test'), {}, err=> {
   if(err) throw err;
   console.log('Folder created...');
});

//Create and write to file || Asyncronous, can be syncronous if used .writeFileSync
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err=> {
    if(err) throw err;
    console.log('File created and written to...');
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
        'Node.js is fun!',
     err=> {
        if(err) throw err;
        console.log('File written to by appending...');
    });
});

//write to file and over ride current info(.appendFile to keep and addon) || Asyncronous, can be syncronous if used .writeFileSync
fs.writeFile(
   path.join(__dirname, '/test', 'hello.txt'), 
   'Node.js is fun!',
err=> {
   if(err) throw err;
   console.log('File written to...');
});

//Read file || without 'utf8' it will give raw buffer data
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data)=> {
   if(err) throw err;
   console.log(data);
});

// Rename file 
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err)=> {
    if(err) throw err;
    console.log('File Renamed...');
 });
