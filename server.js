const http = require("http"); //pegando o modulo http que contem as funcoes necessarias para criar um servidor

const fs = require("fs"); //pegando o modulo para carregamento de arquivos

const path = require("path"); //com isso, poderemos pegar o melhor caminho para os nossos arquivos

//metodo para se criar o servidor tendo como parametro o pedido e a resposta ao meu server
http.createServer((request, response) => {

  const file = request.url ==='/' ? 'index.html' : request.url;
  const filePath = path.join(__dirname,'public',file);
  const extName = path.extname(filePath);

  const allowedFileTypes = ['.html','.css','.js'];
  const allowed = allowedFileTypes.find((item) => item === extName); //se ele achou o arquivo que eu quero retorna true else linha abaixo
  if(!allowed) return;

  fs.readFile( //o cara que le o arquivo
    filePath, //o caminho para o arquivo

    (error,content) => { //segundo parametro do readFile
      if(error) throw error;  //se tiver algum erro lança ele

      response.end(content); //se não vai nos retornar o conteudo no caso o index.html
    }
  )
}).listen(5000, () => console.log("server is running!"));
//o metodo listen diz qual a porta o servidor ira abrir(5000),e ainda está retornando uma arrow function toda vez que eu iniciar o servidor


//return response.end('<h1>HomePage<h1>'); //este metodo sinaliza ao servidor que todos os cabeçalhos e corpo de resposta foram enviados
