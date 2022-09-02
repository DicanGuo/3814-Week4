let url = require('url');
let fs = require('fs');
function renderHTML(path,response){
    pass
}
module.exports = {
    handleRequest: function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        var path = url.parse(request.url).pathname;
        if (path == '/') {
            renderHTML('./index.html', response);
        } else {
            response.writeHead(404);
            response.write('Route not defined');
            response.end();
        }
    }
}