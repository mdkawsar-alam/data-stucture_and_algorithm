// const sum =(arr)=>{
//     let  total=0;
//     for (let i = 0; i< arr.length; i++) {  
//             total += arr[i];
          
//     }
//     return total
// }

// console.log(sum([23,8,6]));
 const double=(arr) =>{
     let newArray=[];
      for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]*2);
        
      }
      return newArray
 }
 console.log(double([25,30,40]));
 