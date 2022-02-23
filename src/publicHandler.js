const fs = require('fs');
const path = require('path');

const publicHandler = (url, response) => {
  const filePath = path.join(__dirname, '..' , 'public' ,url);

  const extention = path.extname(url);

  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
  };

  fs.readFile(filePath, (err, data) => {
    if (err){
     response.writeHead(500)
            response.end('ERROE IN THE SERVER')
        }else {
            response.writeHead(200, { 'content-type': contentType[extention] });
   response.end(data);
    }
  });
};

module.exports = publicHandler;