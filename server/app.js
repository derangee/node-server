const http = require('http');
const handler = require('./server');

const server = http.createServer(handler);



const PORT = 5000; 
server.listen(PORT, ()=>{
    console.log(`Server running at PORT http://localhost:${PORT}`)
});