// program to convert decimal to binary

// function converter (num){
//     return (num >>> 0).toString(2)
// }

function converter(num) {
  if (num === 0) return "0";
  let binary = "";

  while (num > 0){
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  return binary
}
console.log(converter(255));
