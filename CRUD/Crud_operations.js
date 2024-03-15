const fs=require('fs');
const path=require('path');

const dirPath=path.join(__dirname);
console.log(dirPath);

//fs.writeFileSync(`${dirPath}/apple.js`,'This is Red Apple');//Creation of file.


//Read of file
/**fs.readFile(dirPath+"/apple.js",'utf8',(err,file)=>{//without UTF8, it will return buffer
    console.log(file);
})

//Update operation

fs.appendFile(dirPath+"/apple.js",' ,I am appending new content',(err)=>{
    console.log(err);
})

//Rename file
fs.rename(`${dirPath}/apple.js`,`${dirPath}/fruit.js`,(err)=>{//fs.rename(oldPath, newPath, (err)=>{})
    console.log(err);
})**/

//Delete file

fs.unlinkSync(`${dirPath}/fruit.js`);

//Buffer -->Temporary memory location needed to node.js to run