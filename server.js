const io = require('socket.io')();

io.on('connection', client => {
    console.log('Server connection successful: ' + client.id);
});

io.listen(3333);