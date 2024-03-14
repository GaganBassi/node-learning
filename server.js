const data=require('./Data/data');
const http=require('http');
/*http.createServer((req,res)=>{
    res.write("This is Gagan 1234");
    res.end();
}).listen(4500);*/

//Creation of Static Api
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4000);