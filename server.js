const net = require('net');

const server = net.createServer();


server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

// Find a method that returns files from the server
//socket.something should return the file and once that data is recieved by client
//it should be ready to save the data into a new file

server.on('connection', (client) => {
  console.log('New client connected!');
  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    if (data === 'hi'){
      client.write('hello')
    } else if ( data === 'who are you?') {
      client.write('I am the server')
    } else {
      client.write('sorry')
    }//console.log('Message from client: ', data)
  })
  //client.write('Hello there!');

});


// let word = data
//     if (data.includes(word){
//       data = ../data;






// const net = require('net');

// var init = {
//     ClientID: null,
//     ServerDist: 1,
// };

// var dummy = {
//     SimID: '139928XXXXX',
//     SignalType: 'Locate',
//     DateTime: '2019-10-24 13:31:40',
//     ...
// };


// function send_data(socket) {
//     let temp = JSON.stringify(dummy) + '# ';
//     socket.write(temp);
// }

// const server = net.createServer(function (socket) {
//     socket.on('data', data => {
//         # init is a raw string buffer so I had to .toString it
//         if (data.toString() === 'init') {
//             init.ClientID = socket.remoteAddress + ':' + socket.remotePort;
//             let temp = JSON.stringify(init) + '# ';
//             socket.write(temp);
//         }
//         else {
//             # Call send_data every 1000 ms with socket as an arg.
//             setInterval(send_data, 1000, socket )

//         }
//     });
// });

// server.listen(1337, '127.0.0.1');