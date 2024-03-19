const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    
    res.send(' <h1>First Server</h1>');
    //res.status(201).send('')//To send status along with this.
    //res.sendStatus(404);
})


//app.listen should be at the end.
app.listen(8002,()=>{
    console.log('Server Started');
});