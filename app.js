var app = require('./config/server');

var server = app.listen(8090, function(){
    console.log('Servidor Online')
});

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectado');
    });
});