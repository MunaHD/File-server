const fs = require('fs');
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
    fs.readFile(data, 'utf8', (err, content) => {
      if (err) {
        return err;
      } else {
        client.write(content);
      }
    });
  });
});

