module.exports = (app, io) => {
    io.on('connection', (client) => {
        const {session} = client.handshake;
        const {usuario} = session;

        client.on('send-server', (msg) => {
            const msg = `<b>${usuario.nome}:</b> ${msg}<br>`;
            client.emit('send-client', msg);
            client.broadcast.emit('send-client', msg);
        });
        client.on('create-room', (hashDaSala) => {
            session.sala = hashDaSala;
            client.join(hashDaSala);  
        });
        client.on('send-server', (hashDaSala, msg) => {
            const novaMensagem = {email: usuario.email, sala: hashDaSala};
            const resposta = `<b>${usuario.nome}:</b>${msg}<br>`;
            session.sala = hashDaSala;
            client.broadcast.emit('new-message', novaMensagem);
            io.to(hashDaSala).emit('send-client', resposta);
        });

        client.on('disconnect', () => {
            const {sala} = session;
            session.sala = null;
            client.leave(sala);
        });
    });
}