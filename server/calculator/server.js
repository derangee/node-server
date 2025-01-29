const fs = require('fs');
const { buffer } = require('stream/consumers');

 const handler = ((req,res)=>{

    if(req.url === '/') {
        res.setHeader("Content-Type", 'text/HTML');
        res.write(
            `<HTML>
                <body> 
                    <h1> Calculator - using NodeJs! </h1>
                    <br>
                    <br>
                    <br>
                    <br>

                   <h2> <a href = "/calculator"> Go to Calculator </a> </h2>
                </body> 
            </HTML>`
        )
        return res.end();
    }

    else if(req.url === '/calculator') {
        res.setHeader("Content-Type", 'text/HTML');
        res.write(
            `<HTML>
                <body> 
                    <h1> Calculator </h1>
                    <br>
                    <br>

                    <form action="/calculate-result" method="POST">
                        <input type="text" name="firstnum"/> 
                        <input type="text" name="secondnum"/> 
                        <input type="submit"/>
                    </form>    
                </body> 
            </HTML>`
        )
        return res.end();
    }

    else if(req.url === "/calculate-result" && req.method == "POST") {
         
        const obj = {} ;
        const body = [];

        req.on(('data') , chunks => {
            body.push(chunks);
        })

        let result = [];

        req.on(('end') , () => {
            const objdata = Buffer.concat(body).toString();
            const params = new URLSearchParams(objdata);
            const bodyobj = Object.fromEntries(params);
            result = Number(bodyobj.firstnum) + Number(bodyobj.secondnum)
            res.setHeader("Content-Type", 'text/HTML');

            res.write(`
                <html>
                    <body>
                        <h1> Result is ${result} </h1>
                    </body>
                </html>`        
            )

            return res.end();
        })
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










