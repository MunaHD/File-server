const net = require('net');

const conn = net.createConnection({
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3000 // or change to the ngrok port if tunneling
});
conn.setEncoding('utf8'); // interpret data as text



conn.on('connect', () => {
  conn.write('data.txt');
});
let filePath = './data.txt';
conn.on('data', (data) => {
  let size = data.length;
  console.log(`The size of the file is ${size} bytes`);
  let message = `Downloaded and saved to ${filePath}.`;
  console.log(message);
  console.log('Here is the data you requested: ', data);
});

