var http = require('http');
var arquivo = require('fs');

//var confirm('jonatan');
//var prompt("what is your name?");
//var prompt("what is ubuntu?");
//////nodejs///////////////////////////////////////////////////


var server = http.createServer(function(request,response){
  arquivo.readFile('./alert.html', function(err,html){
    response.writeHead(200,{"content-type": "text/html"});
    if (err) response.write("Page not found error 404");
    response.write(html);

    if (request.url == '/') {
      arquivo.readFile('./teste.html');
       }

     else {
       response.write("<h1>Page not found</h1>");
     }
    response.end();

  });


  
});

server.listen(8081, function(){
  console.log('server is running');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<!DOCTYPE html>
<html>
<head>
<title>Tutorial de Alert em Javascript - Linha de Código</title>

<script>



///form.addEventListener('Enviar', function funcao1() {
    // alerta o valor do campo
    ///alert(campo.value);

//////////////////////////////////////////
function funcao1() {

  var teste = document.getElementById("campo").value;
  if (teste >= 18) {
    alert("voce pode acessar seja bem vindo!" + teste);
  }
if (teste < 18) {
  alert("vaza moloque e proibidao sua idade e:" + teste);

}
}




</script>
</head>
<body>

<input type="button" onclick="funcao1()" value="Exibir Alert" />


<input type="button" value="Idade" />

<Form1 id="idade">
  <input type="text" id="campo">
  <input type="submit" value="Enviar">
</form1>

</body>
</html>
