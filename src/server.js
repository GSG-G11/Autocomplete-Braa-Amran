const http = require('http');
require('env2')('.env');

const server = http.createServer();
const port = 3000;

server.listen(process.env.PORT || port, () => {
  console.log(`Server is listening on port ${port}.  Ready to accept requests!`);
});
