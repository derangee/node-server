const http = require('http');

const server = http.createServer((req, res) =>{
    res.setHeader("Content-Type", 'text/HTML');
    res.write('<HTML>');
    res.write('<body> <h1> Hey </h1> </body> ')
    res.write('</HTML>')
    res.end();
})

const PORT = 5000; 
server.listen(PORT, ()=>{
    console.log(`Server running at PORT http://localhost:${PORT}`)
});







