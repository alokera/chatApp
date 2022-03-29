const io = require('socket.io')(8000) 
const express = require('express')
const app = express();
var cors = require('cors');
app.use(cors({origin: 'http://localhost:8000'}));

const users = {};

io.on('connection', socket =>{
   
    socket.on('new-user-joined', name =>{
        console.log("hey");
        console.log("New user", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    })
    socket.on('send', message=>{
        socket.broadcast.emit('receive' , {message: message, name: user[socket.id]})
    })
})

