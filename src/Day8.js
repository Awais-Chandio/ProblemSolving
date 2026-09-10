/*
Solved From LEET CODE
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.

*/


async function sleep(millis) {
   return new Promise((resolve,reject)=>{
      return setTimeout(resolve,millis)
   })
   
}

console.log(sleep(100))
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));