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
      else if ( url === "/js/api.js"){
        const filePath = path.join(__dirname,'..','public','js','api.js');
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
                   response.writeHead(200, { "Content-Type": "application/json" });
                   response.end(JSON.stringify(arr)); //data send to xhr
                   
                  }
              }); 
      } else if (url.includes("api") ){
        let dataXhr = (url.split('/')[2])
        // console.log(dataXhr)
            https.get(`https://api.unsplash.com/photos/?client_id=wgMDUq6nkl18c9Eop2yezO0e0EB0VMp3rp172jAh_uA&query=${dataXhr}`, (res) => {
                let data = '';
                // A chunk of data has been received.
                res.on('data', (chunk) => {
                  data += chunk;
                });
                // The whole response has been received. Print out the result.
                res.on('end', () => {
                  let dataApi = JSON.parse(data)
                  let unData= dataApi[0]
                  // console.log(dataApi[0].urls.full);
                  response.writeHead(200, { "Content-Type": "application/json" });
                   response.end(JSON.stringify(unData)); //data send to xhr
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