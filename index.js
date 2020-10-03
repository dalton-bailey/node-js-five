const http = require('http')
const app = require('./app')
const two = require('./static-app')

const port = process.env.PORT || 5000
const staticPort = process.env.PORT || 3000

const server = http.createServer(app)
const staticServer = http.createServer(two)

server.listen(port)
staticServer.listen(staticPort)
