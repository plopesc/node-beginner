var http = require('http');
var url = require('url');


function start() {
  var onRequest = function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Path: ' + pathname);
    response.end();
  };

  http.createServer(onRequest).listen(8888);
  console.log('start');
}

exports.start = start;
