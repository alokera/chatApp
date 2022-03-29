const socket = io('http://localhost:8000');

const form = document.getElementById("send-container");
const messageInp = document.getElementById("messageInp")
const messageContainer = document.querySelector(".container")
console.log(messageInp);
const name = prompt("enter your name to join")
socket.emit('new-user-joined', name);

