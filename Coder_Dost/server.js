const http=require('http');
//console.log(http);
const data={"Name":"Gagan"};

const fs=require('fs');
//const dataFile=fs.readFileSync('index.html','utf-8');
const dataJson=fs.readFileSync('data.json','utf-8');

const server=http.createServer((req,res)=>{
//Routes in https
    switch(req.url){
        case '/':
            res.setHeader('Dummy','value');
            res.end('Home Page');
            break;
        case '/api':
            res.setHeader('content-type','application/JSON');
            res.end(dataJson);
            break;
        default:
            res.writeHead(404);
            res.end();

    }
    //console.log(req.url);//to get the searched URl
    //res.setHeader('Dummy','value');
    //res.setHeader('content-type','application/JSON');
    //res.end(JSON.stringify(data));
    //res.setHeader('content-type','text/html')//type of response data without this it will treat this as a normal text and print tags 
    //on the browser as a resposnse.
    
})
server.listen(8000);