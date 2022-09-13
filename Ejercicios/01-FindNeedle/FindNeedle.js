function FindNeedle (haystack, needle) {
  // Your code here:

  console.log(haystack);
  console.log(needle);    

//   for(let i = 0; i < haystack.legth - needle.legth + 1; i++){
//     const sliced = haystack.slice(i, i + needle.legth);
//     console.log(sliced);
//     if(needle === sliced)
//       return i;
//   }
//   return -1
// }


  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    for (let j = 0; j < needle.length; j++) {     
      if (haystack[i + j] !== needle[j]) break;
      if (j === needle.length - 1) return i;
    }
  }
  return -1;
}



console.log(FindNeedle('react-redux', 'redux'));
console.log(FindNeedle('aaapink', 'pink'));
console.log(FindNeedle('rereredux', 'reredux'));
console.log(FindNeedle('margarita', 'reredux'));




module.exports = FindNeedle
