let currentAges = new Set([5,15,66,23,25,27]);

// after one year 
// currentAges.forEach((age) => {
//     console.log(age += 1)
// })

currentAges = new Set([...currentAges].map((age) => age += 1))
console.log(currentAges)