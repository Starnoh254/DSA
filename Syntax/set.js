// what is a set ?
// a set is a collection of unique elements

let mySet = new Set([1,2,3,3,4,4,5])
mySet.add(6)
mySet.add(3)
mySet.delete(5)
// mySet.clear()
console.log(mySet)

console.log(mySet.has(5))
console.log(mySet.has(4))
console.log(mySet.size)