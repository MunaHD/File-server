const net = require('net');
const fs = require('fs')


const conn = net.createConnection({ 
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3000 // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

conn.on('connect', () => {
  conn.write('you good?');
});
let filePath = './data.txt';
conn.on('data', (data) => {  
  fs.writeFile(filePath, data, {flag: 'a+' }, err => {
    if (err) {
      console.error(err)
      return
    }
    //read the file to get the size  
    //let size = data.length  ${size} bytes 
    let message = `Downloaded and saved to ${filePath}.`
    console.log(message)
    //file written successfully
  })
  //console.log('Server says: ', data);
});

