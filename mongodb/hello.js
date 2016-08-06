var http = require('http');

var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text-plain'});
    res.end('Hello, World');
});

server.listen(7000);
console.log("Running at local host port 8000");