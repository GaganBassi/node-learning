const express=require('express');

const app=express();

//Creation of middleware between client and server.
app.use((req,res,next)=>{
    console.log(req.method,req.ip, req.hostname,new Date, req.get('User-Agent'));
next();//here next means request can move down from this middleware
})
//Express code/routes run from top to bottom.
app.get('/',(req,res)=>{
    
    res.json({'type':'Get'});
    //res.send(' <h1>First Server</h1>');
    //res.status(201).send('')//To send status along with this.
    //res.sendStatus(404);
})

//To use these operations, use either thunderclient or postman.


//These are called API-Endpoints-route
app.post('/',(req,res)=>{
    res.json({'type':'Post'});
});
app.put('/',(req,res)=>{
    res.json({'type':'Put'});
})
app.delete('/',(req,res)=>{
    res.json({'type':'delete'});
})
app.patch('/',(req,res)=>{res.json({'type':'patch'})})
//app.listen should be at the end.
app.listen(8002,()=>{
    console.log('Server Started');
});