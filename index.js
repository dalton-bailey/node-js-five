var http = require('http')
const port = 3000
const server = http.createServer()

server.listen(port)

// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-type": "text/plain"})
//     res.end("Hello World")
// }).listen(process.env.PORT)