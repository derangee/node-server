const http = require('http');
const handler = require('./server'); //importing handler function

const server = http.createServer(handler); //creating server



const PORT = 5000; 
server.listen(PORT, ()=>{
    console.log(`Server running at PORT http://localhost:${PORT}`)
});