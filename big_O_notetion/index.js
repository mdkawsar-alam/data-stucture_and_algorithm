// const sum =(arr)=>{
//     let  total=0;
//     for (let i = 0; i< arr.length; i++) {  
//             total += arr[i];
          
//     }
//     return total
// }

// console.log(sum([23,8,6]));

//  const double=(arr) =>{
//      let newArray=[];
//       for (let i = 0; i < arr.length; i++) {
//         newArray.push(arr[i]*2);
        
//       }
//       return newArray
//  }
//  console.log(double([25,30,40]));
 

// time and space complexity

//  const uniqName= (arr)=>{
//      let uniqNames=[];
//      for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//          if (!uniqNames.includes(element)) {
//             uniqNames.push(element)

////time complexity==n2 and space complexity=n
            
//          }
        
//      }
//      return  uniqNames
//  }
//   console.log(uniqName(['kawsar', 'raju','asad','kawsar']));
  

//  use while loop
    //  const  logarithmN=(n)=>{
        // while (n>1) {
            //  console.log(n)
            //  n/=2;
            // 
        // }
        // console.log('done');
        // 
    //  }
    //   logarithmN(25);

    // recursive function user
      const logarithmN=(n)=>{
         if (n<=1) {
            console.log('done');
            
            return

         }
         console.log(n);
         
         logarithmN(n/2)
      } 
 logarithmN(10);
