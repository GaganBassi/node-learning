const http=require('http');
//console.log(http);
const data={"Name":"Gagan"};

const server=http.createServer((req,res)=>{
    res.setHeader('Dummy','value');
    res.setHeader('content-type','application/JSON');
    res.end(JSON.stringify(data));
})
server.listen(8000);