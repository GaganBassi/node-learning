//Here we can do everything with default func, no need of making custom middleware

const express=require('express');
const app=express();

const morgan=require('morgan');
app.use(morgan('dev'));
app.use(morgan('default'));

app.get('/',(req,res)=>{
    res.send('Home Page');
})
app.listen(1000,()=>
console.log('1000 port has started'));
