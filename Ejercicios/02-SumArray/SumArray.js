function SumArray (arr, n) {
  // Your code here:
  for(let i = 0; i < arr.length-1;i++){
    if((arr[i] + arr[i+1]) === n)
      return true;
  }

  return false;
}

console.log(SumArray([2,4,5,9],9));
console.log(SumArray([2,4,5,9],12));


module.exports = SumArray
