const arr = [1,2,3,'Starnoh']
console.log(arr[3])
for (item of arr){
    console.log(item)
}

console.log(arr.unshift(0))
console.log(arr)
arr.pop()
console.log(arr)
console.log(arr.shift())