const fs = require('fs');
const path= require('path');
const querystring = require('querystring');
const router = (request, response) => {
    const url = request.url;
    const method = request.method;
   
     if(url !== '/') {
        response.writeHead(404)
        response.end("not found")
    } 
    
  }
  module.exports = router;