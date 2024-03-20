//copy paste all the logics related to product from express/server.js

//const dataArr=require('../express/server.js');
const fs=require('fs');
const data2=fs.readFileSync('index.html','utf-8');

const data3=fs.readFileSync('../data.json','utf-8');
const data4=JSON.parse(data3);
console.log("data4", data4);//JSON Object
const dataArr=[data4];//Conversion of object to array
console.log('DataArr',dataArr);
const createProduct=(req,res)=>{
    console.log(req.body);
    dataArr.push(req.body);
    console.log("Json dataArr Data is coming up");
    console.log(dataArr);
        res.json({"type":"Post"});
    }

const getProduct=(req,res)=>{
    res.json(dataArr);
}

const replaceProduct=(req,res)=>{
    //PUT
    const id=parseInt(req.params['id']);
    console.log("id",id);
   const index=dataArr.findIndex((i)=>i.id===id);
    console.log(index);
dataArr.splice(index,1,{...req.body,'id':id});
res.status(201).json(dataArr);


}

const updateProduct=(req,res)=>{
    //PATCH
    const id=parseInt(req.params['id']);
    console.log("id",id);
   const index=dataArr.findIndex((i)=>i.id===id);
    console.log(index);
    const element=dataArr[index];
dataArr.splice(index,1,{...element,...req.body});//here properties which repeats in element by req.body will be override
res.status(201).json(dataArr);


}
const deleteProduct=(req,res)=>{
    const id=parseInt(req.params['id']);
    console.log(req.params);
    console.log("id",id);
   const index=dataArr.findIndex((i)=>i.id===id);
    console.log(index);
    dataArr.splice(index,1);
    res.status(201).send('Deleted');
}

exports.createProduct=createProduct;
exports.getProduct=getProduct;
exports.replaceProduct=replaceProduct;
exports.updateProduct=updateProduct;
exports.deleteProduct=deleteProduct;