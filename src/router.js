const fs = require('fs');
const path= require('path');
const querystring = require('querystring');
const https = require('https');


const router = (request, response) => {
    const url = request.url;
    const method = request.method;
    // console.log(url);
    if(url === '/') {
        const filePath = path.join(__dirname,'..','public','index.html');
            fs.readFile(filePath, (error, data) => {
              if (error) {
             response.writeHead(500)
             response.end("server error")
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
            response.writeHead(500)
            response.end("server error")
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
            response.writeHead(500)
            response.end("server error")
            return;
          } 
          else {
            response.writeHead(200, { 'Content-Type': 'text/javasrcipt' })
            response.end(data);
          }
        })
      }
      else if ( url.includes("cars") && method==='POST'){
        let dataXhr = (url.split('/')[2])
            const filePath = path.join(__dirname,'cars.json');
            //to recive datd and send to json file 
                fs.readFile(filePath,(err,data)=>{
                  if(err){
                    response.writeHead(500)
                    response.end('error server')
                  }else {
                   let dataJson=JSON.parse(data)
                   let result =  dataJson.filter((data)=>{
                       return data.Name.toLocaleLowerCase().startsWith(dataXhr.toLocaleLowerCase());
                   })
                   let arr = [];
                   for (let i=0;i<result.length;i++){
                  let aa=  result[i].Name
                  arr.push(aa)
                   }
                   console.log(arr)
                   response.writeHead(200, { "Content-Type": "application/json" });
                   response.end(JSON.stringify(arr)); //data send to xhr
                   
                  }
              }); 
      } 
     else{
        response.writeHead(404)
        response.end("not found")
    }
    
  }
  module.exports = router;