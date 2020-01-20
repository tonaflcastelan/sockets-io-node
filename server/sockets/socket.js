const {io} = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // listen client
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);
        // if (message.user) {
        //     callback({
        //         response: 'OK!!!'
        //     });
        // } else {
        //     callback({
        //         response: 'BAD!!!'
        //     });
        // }
    });
});