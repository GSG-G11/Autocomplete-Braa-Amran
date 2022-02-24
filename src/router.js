const fs = require('fs');
const path= require('path');
const https = require('https');
const publicHandler = require('./publicHandler')

const router = (request, response) => {
    const url = request.url;
    const method = request.method;
    if(url === '/') {
        publicHandler('/index.html',response)
      }
      else if ( url === "/css/style.css"){
        publicHandler(url,response)
      } 
      else if ( url === "/js/index.js"){
        publicHandler(url,response)
      }
      else if ( url === "/js/api.js"){
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
                   let dataJson=JSON.parse(data)        //cars.json 
                   let result =  dataJson.filter((data)=>{
                       return data.Name.toLocaleLowerCase().startsWith(dataXhr.toLocaleLowerCase());
                   })  // return array of object which name is mathed to dataXhr
                   let arr = [];
                   for (let i=0;i<result.length;i++){
                  let aa=  result[i].Name
                  arr.push(aa)
                   }
                   response.writeHead(200, { "Content-Type": "application/json" });
                   response.end(JSON.stringify(arr)); //data send to xhr
                  }
              }); 
      } else if (url.includes("api") ){
        let dataXhr = (url.split('/')[2])
        // console.log(dataXhr)
            https.get(`https://imsea.herokuapp.com/api/1?q=${dataXhr}`, (res) => {
              // res = data from api
                let data = '';
                res.on('data', (chunk) => {
                  data += chunk;
                });
                res.on('end', () => {
                  let dataApi = JSON.parse(data)
                  response.writeHead(200, { "Content-Type": "application/json" });
                   response.end(JSON.stringify(dataApi)); //data send to xhr
                });

              }).on("error", (err) => {
                console.log("Error: " + err.message);
              });
  }
     else{
        response.writeHead(404)
        response.end("not found")
    }
    
  }
  module.exports = router;