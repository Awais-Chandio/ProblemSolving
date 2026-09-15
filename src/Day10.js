const evenCount = (numbers)=> {

    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i]%2===0){
            count++;
        }

    }
    return count;
}
console.log(evenCount([1,2,3,4,5,6,7,8,9,10]));



const oddCount = (numbersArray)=>{
    let countOdd = 0;
    for (let i =0; i<numbersArray.length; i++){
        if(numbersArray[i]%2!==0){
            countOdd++;
        }
    }
    return countOdd;

}
console.log(oddCount([1,2,3,4,5,6,7,8,9,10]));