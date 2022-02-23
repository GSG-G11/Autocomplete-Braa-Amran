const fs = require('fs');
const path= require('path');
const querystring = require('querystring');
const https = require('https');
const publicHandler = require('./publicHandler')


const router = (request, response) => {
    const url = request.url;
    const method = request.method;
    // console.log(url);
    if(url === '/') {
        publicHandler('/index.html',response)
      }
      else if ( url === "/css/style.css"){
        publicHandler(url,response)
      } 
      else if ( url === "/js/index.js"){
        publicHandler(url,response)
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