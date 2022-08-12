var http = require('http');
var Server = http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    res.writeHead(200,{'content-Type': 'text/plain'});
    res.end('Hey Capgemini');

});
Server.listen(3000, '127.0.0.1');
console.log("Success, i'm listening from port:3000");
