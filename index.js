const AllEvenNum = (arr) => {
  let temp = 0
  for (let i = 0; i < arr.length; i++) {
   if(arr[i] % 2 === 0){
     temp += arr[i]
   }
  }
  return temp
};

console.log(AllEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


const NumOfArray = [1,2,3,4,6,7,8,9,10]
let result = NumOfArray.reduce((acc, curr) =>{
  return curr % 2 === 0 ? acc + curr : acc
},0)

console.log(result)