const socket = io();
/* Escuchar eventos */
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});
/* Envíar información */
socket.emit('sendMessage', {
    user: 'Tonatiuh',
    message: 'Hello World'
}, function(response) {
    console.log('res server: ', response)
});
/* Escuchar información */
socket.on('sendMessage', function(response) {
    console.log('Server :', response);
});