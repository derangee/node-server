const fs = require('fs');
const { buffer } = require('stream/consumers');

 const handler = ((req,res)=>{

    if(req.url === '/') {
        res.write(
            `<HTML>
                <body> 
                    <h1> Calculator - using NodeJs! 
                    <br>
                    <a href = "/calculator"> Go to Calculator </a>
                </body> 
            </HTML>`
        )
        return res.end();
    }

    else if(req.url === '/form' && req.method == "POST") {
        const body  = [];
        req.on('data', chunk =>{
            console.log(chunk); //reading chunks  
            body.push(chunk);
        })

        req.on('end', ()=>{
            const parsed = Buffer.concat(body).toString(); //changing the buffer data into string data
            console.log(parsed);

            const obj = {}; // empty object
            const params = new URLSearchParams(parsed); //changing the string to readable lang 

            for( const[key,value] of params.entries() ) {  //storing data in form of key value pair
                obj[key] = value;
            }

            const bodyobj = Object.fromEntries(params); //another way of storing data in objects instead of for loop

            console.log(obj)
            //console.log(bodyobj); would also give same result
            fs.writeFileSync('user.txt', JSON.stringify(obj)); //storing data in user.txt


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


module.exports = handler; //exports the handler function










