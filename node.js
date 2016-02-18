var http = require('http');
var arquivo = require('fs');

var server = http.createServer(function(request,response){
  arquivo.readFile('./path',function(err,html){
    response.writeHead(200,{"content-type": "text/html"});
    if (err) response.write('Page not found error 404');
    response.write(html);
    response.end();

  });
});

server.listen(8081, function(){
  console.log('server is running');
});
