// const numarr= [10,2,-3, ' error',-1,-25,80]
// const higherAndLower=(arr)=>{
//      let higher= arr[0];
//      let lower= arr[0];

//      for (let i = 0; i < arr.length; i++) {
//          if (typeof arr[i]===!'number')continue
//         if (higher<arr[i]) {
//             higher= arr[i];
            
//         }
//          if(lower>arr[i])
//             lower= arr[i]
        
//      };
//  return(higher-lower)
// }

// console.log( higherAndLower(numarr));



const cheaterCount = (str) => {
    let cheaterList = {}
     for (let i = 0; i < str.length; i++) {
         const element = str[i].toLowerCase();
         if (cheaterList[element] > 0) {
             cheaterList[element]++
            
         } else {
             cheaterList[element]=1
            
         }
        
     }
    
    console.log(cheaterList)
    
}
cheaterCount(" hello engineersS")
