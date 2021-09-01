const http = require("http"); //pegando o modulo http que contem as funcoes necessarias para criar um servidor

//metodo para se criar o servidor tendo como parametro o pedido e a resposta ao meu server
http.createServer((request, response) => {

  if(request.url ===  '/'){ //se a url for igual a /
    
    return response.end('<h1>HomePage<h1>'); //este metodo sinaliza ao servidor que todos os cabeçalhos e corpo de resposta foram enviados
  }
  if(request.url ===  '/contato'){
    return response.end('<h1>Contato<h1>');
  }

}).listen(5000, () => console.log("server is running!"));
//o metodo listen diz qual a porta o servidor ira abrir(5000),e ainda está retornando uma arrow function toda vez que eu iniciar o servidor
