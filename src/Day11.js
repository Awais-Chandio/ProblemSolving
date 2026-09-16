const greaterElement = (numArray)=>{
let greaterCount = numArray[0];
for(let i=0; i<numArray.length; i++){
    if(numArray[i]>greaterCount){
        greaterCount = numArray[i];
    }
}
return greaterCount;
}
console.log(greaterElement([1,2,3,4,11,6,7,8,9,10]));


const smallerElement = (num2Array)=>{
    let smallerCount = num2Array[0];
    for(let i=0; i<num2Array.length; i++){
        if(num2Array[i]<smallerCount){
            smallerCount = num2Array[i];
        }
    }
    return smallerCount;
}
console.log(smallerElement([1,-7,2,3,4,11,6,7,8,9,10]));