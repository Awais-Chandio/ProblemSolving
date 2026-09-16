const greaterElement = (numArray)=>{
let greaterCount = [0];
for(let i=0; i<numArray.length; i++){
    if(numArray[i]>greaterCount){
        greaterCount = numArray[i];
    }
}
return greaterCount;
}
console.log(greaterElement([1,2,3,4,11,6,7,8,9,10]));