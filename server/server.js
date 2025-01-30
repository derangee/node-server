const fs = require('fs');


 const handler = ((req,res)=>{

    if(req.url === '/') {
        res.setHeader("Content-Type", 'text/HTML');
        res.write(
            `<HTML>
                <body> 
                    <h1> Hey, This is a Node Server! </h1>
                </body> 
            </HTML>`
        )
        return res.end();
    }

 

    else{
        res.setHeader("Content-Type", 'text/HTML');
        res.write('<HTML>');
        res.write('<body> <h1> Invalid address 404 </h1> </body> ')
        res.write('</HTML>')
        return res.end();
    }
})


module.exports = handler; //exports the handler function










