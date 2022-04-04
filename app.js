var http = require('http');
http.createServer(function (req,res) {
console.log(req.url)
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write('<h2>hello!</h2>');
  res.end();
}).listen(8080);
 


