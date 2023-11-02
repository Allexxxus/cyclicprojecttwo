const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let clickCount = 0;

io.on('connection', (socket) => {
  socket.emit('updateClickCount', clickCount);

  socket.on('click', () => {
    clickCount++;
    io.emit('updateClickCount', clickCount);
  });
});

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});