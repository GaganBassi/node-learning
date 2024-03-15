let a=10;
let b=20;

setTimeout(()=>{b=30;
console.log('Timout',a+b)},3000);

console.log(a+b);

//This is the drawback of the async llanguage because here ist 7th line will execute then result of 4th will comes up and b
//will update after setTimout runs.