
function longestWord(str){
  var max = 0;
  var arr = str.split(' ');
  for(var i=1; i<arr.length; i++){
    if(arr[max].length < arr[i].length){
      max = i;
    }
  }
  return arr[max];
}

console.log(longestWord('Snap Crackle Pop goes Rice Krispies'))