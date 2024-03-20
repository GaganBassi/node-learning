const express=require('express');

const app=express();

//app.use() will execute before every request.
//Creation of middleware between client and server.
/**app.use((req,res,next)=>{
    console.log(req.method,req.ip, req.hostname,new Date, req.get('User-Agent'));
    if(req.query.pass==='123'){
        next();
    }
    else{
        res.sendStatus(404);
    }
//next();//here next means request can move down from this middleware
})**/

const auth=(req,res,next)=>{//Actual creation of middleware
    console.log(req.method,req.ip, req.hostname,new Date, req.get('User-Agent'));
    if(req.query.pass==='123'){
        next();
    }
    else{
        res.sendStatus(404);
    }
//next();//here next means request can move down from this middleware
}
//app.use(auth);//Other way to execute middleware.

//Express code/routes run from top to bottom.
app.get('/',auth,(req,res)=>{//Now only this get method has the auth middleware for other requests it will not work.
    //console.log(req.query);
    res.json({'type':'Get'});
    //res.send(' <h1>First Server</h1>');
    //res.status(201).send('')//To send status along with this.
    //res.sendStatus(404);
    
})

//To use these operations, use either thunderclient or postman.


//These are called API-Endpoints-route
app.post('/',(req,res)=>{//now these methods are not part of auth middleware as we removed app.use() and applied auth on get request only.
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