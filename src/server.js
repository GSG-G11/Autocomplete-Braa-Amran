const http = require('http');
const router = require('./router')
require('env2')('.env');
const server = http.createServer(router);
const port = process.env.PORT ||8080;

server.listen( port, () => {
  console.log(`Server is listening on port ${port}.  Ready to accept requests!`);
});
