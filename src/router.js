const fs = require('fs');
const path= require('path');
const querystring = require('querystring');
const router = (request, response) => {
    const url = request.url;
    const method = request.method;
    if(url === '/') {
        const filePath = path.join(__dirname,'..','public','index.html');
            fs.readFile(filePath, (error, data) => {
              if (error) {
             
                response.end("error")
                return;
              } else {
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.end(data);
              }
            })
      }  else if ( url === "/css/style.css"){
        const filePath = path.join(__dirname,'..','public','css','style.css');
        fs.readFile(filePath, (error, data) => {
          if (error) {
           
            response.end("error")
            return;
          } else {
            response.writeHead(200, { 'Content-Type': 'text/css' })
            response.end(data);
          }
        })
      } 
      else if ( url === "/js/index.js"){
        const filePath = path.join(__dirname,'..','public','js','index.js');
        fs.readFile(filePath, (error, data) => {
          if (error) {
            response.end("error")
            return;
          } else {
            response.writeHead(200, { 'Content-Type': 'text/javasrcipt' })
            response.end(data);
          }
        })
      }
   
     else{
        response.writeHead(404)
        response.end("not found")
    } 
    
  }
  module.exports = router;