const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    
    res.json({'type':'Get'});
    //res.send(' <h1>First Server</h1>');
    //res.status(201).send('')//To send status along with this.
    //res.sendStatus(404);
})

//To use these operations, use either thunderclient or postman.
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