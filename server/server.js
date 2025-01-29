const http = require('http');

const server = http.createServer((req, res) =>{

    if(req.url === '/') {
        res.setHeader("Content-Type", 'text/HTML');
        res.write('<HTML>');
        res.write('<body> <h1> Hey </h1> </body> ')
        res.write('</HTML>')
        return res.end();
    }

    else if(req.url === '/form && req.method == "POST"') {
        res.setHeader("Content-Type", 'text/HTML');
        res.write('<HTML>');
        res.write('<body> <h1> Hey </h1> </body> ')
        res.write('<form method="POST">')
        res.write('<input type="text" name="username"/>')
        res.write('<br>');
        res.write('<input type="radio" name="gender" id="male" value="male"/>')
        res.write('<input type="radio" name="gender" id="female" value="female"/>')
        res.write('<br>');
        res.write('<input type="submit"/>')
        res.write('</form>')
        res.write('</HTML>')
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    }

    else{
        res.setHeader("Content-Type", 'text/HTML');
        res.write('<HTML>');
        res.write('<body> <h1> Invalid address </h1> </body> ')
        res.write('</HTML>')
        return res.end();
    }



})

const PORT = 5000; 
server.listen(PORT, ()=>{
    console.log(`Server running at PORT http://localhost:${PORT}`)
});







