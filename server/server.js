const https = require('https');
const server = https.createServer((req, res) =>{
    console.log(req);
})

const PORT = 3000; 
server.listen(PORT, ()=>{
    console.log(`Server running at PORT https://localhost:${PORT}`)
});



