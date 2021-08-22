var app = require('./config/server');

var server = app.listen(8090, function(){
    console.log('Servidor Online')
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectado');
    });

    socket.on('msgParaServidor', function(data){
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );
    });

    socket.on('msgParaServidor', function(data){
        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );
    });
});