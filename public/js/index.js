        var socket = io();

        socket.on('connect', function() {
            console.log('Connected to Server');
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