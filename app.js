module.exports={
    x:10
}

const fs=require('fs');
const inp=process.argv;//it will give the input whatever we pass while executing this, for example, node app.js 'Apple' 'Grapes'
//process.argv has array in element starts from 2nd index will take this input
//here inp[2]='Apple' and inp[3]='Grapes'

console.log(inp);

//fs.writeFileSync(/* path with file_name where we wanted to create file , text inside the file*/ inp[2],inp[3]);

if(inp[2]=='add'){
    fs.writeFileSync(/* file_name , text inside the file*/ inp[3],inp[4]);
}
else if(inp[2]=='remove'){
    fs.unlinkSync(inp[3]);
}
else{
    console.log('Enter valid ist argument');
}

const path=require('path');
const dirPath=path.join(__dirname,'Data');//__dirname-current directory, 'Data'-current directory/Data
console.log(dirPath);

fs.writeFileSync(dirPath+"/abc.txt","This is abc");

fs.readdir(dirPath,(err,files)=>{
    console.log(files);//it will give array of all the files list in Data folder
})