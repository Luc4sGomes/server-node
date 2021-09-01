const http = require("http");
const data = require("./urls.json");
const fs = require("fs");
const URL = require("url");
const path = require("path");

function writeFile(cb) {
  return fs.writeFile(
    path.join(__dirname, "urls.json"),
    JSON.stringify(data, null, 2),
    (error) => {
      if (error) {
        throw error;
      }

      cb(JSON.stringify({ message: "ok" }));
    }
  );
}

http
  .createServer((request, response) => {
    const { name, url, del } = URL.parse(request.url, true).query;

    response.writeHead(200,{'Access-Control-Allow-Origin' : '*'})

    if (!name || !url) {
      return response.end(JSON.stringify(data));
    }

    if (del) {
      data.urls = data.urls.filter((item) => String(item.url) != String(url));
      return writeFile((message) => {
        response.end(message);
      });
    }

    data.urls.push({name,url});
    return writeFile((message) => response.end(message))

  }).listen(3000, () => console.log("Api is running!"));
