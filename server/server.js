const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

const server = http.createServer((req, res) =>{

    if(req.url === '/') {
        res.write('<HTML>');
        res.write('<body> <h1> Hey </h1> </body> ')
        res.write('<form method="POST" action ="/form">')
        res.write('<input type="text" name="username"/>')
        res.write('<br>');
        res.write('<label for="male"> Male </label>')
        res.write('<input type="radio" name="gender" id="male" value="male"/>')
        res.write('<label for="female"> Female </label>')
        res.write('<input type="radio" name="gender" id="female" value="female"/>')
        res.write('<br>');
        res.write('<input type="submit"/>')
        res.write('</form>')
        res.write('</HTML>')
        return res.end();
    }

    else if(req.url === '/form' && req.method == "POST") {
        fs.writeFileSync('user.text', 'daksh vashishtha');
        const body  = [];
        req.on('data', chunk =>{
            console.log(chunk);
            body.push(chunk);
        })

        req.on('end', ()=>{
            const parsed = Buffer.concat(body).toString();
            console.log(parsed);
        })

        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    }

    else if(req.url === '/nav') {
        res.write('<HTML>');
        res.write('<body>');

        res.write('<h3> <a href="/home"> Home </a> </h3> ')
        res.write('<h3> <a href="/men"> Men </a> </h3> ')
        res.write('<h3> <a href="/women"> Women </a> </h3> ')
        res.write('<h3> <a href="/kids"> Kids </a> </h3> ')
        res.write('<h3> <a href="/cart"> Cart </a> </h3> ')


        res.write('</body>')
        res.write('</HTML>');
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







