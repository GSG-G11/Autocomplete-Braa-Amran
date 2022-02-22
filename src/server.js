const http = require('http');

require('env2')('.env');
const server = http.createServer();
const port = process.env.PORT ||3000;

server.listen( port, () => {
  console.log(`Server is listening on port ${port}.  Ready to accept requests!`);
});
