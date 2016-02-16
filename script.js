var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200, {"content-type": "text/html"});

    if (request.url == '/') {
      response.write("<h1> pagina principal</h1>");
    }

    else if(request.url == '/contato' ){
      response.write("<h1> pagina de contato</h1>");
    }


    else if(request.url == '/clientes' ){
      response.write("<h1> pagina de clientes</h1>");
    }

    else {
      response.write("<h1> page not found 404</h1>");
    }


      response.end();
    });

    server.listen(3000, function(){
      console.log('aula 2 - servidor esta rodando!');

});
