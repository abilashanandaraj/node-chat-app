        var socket = io();

        socket.on('connect', function() {
            console.log('Connected to Server');

            socket.emit('createMessage', {
                from: 'Abilash',
                text: 'Yup, that works for me.'
            });
        });

        socket.on('disconnect', function() {
            console.log('Disconnected from Server');
        });

        socket.on('newEmail', function(email) {
            console.log('New email', email);
        });

        socket.on('newMesage', function(message) {
            console.log('newMesage', message);
        });