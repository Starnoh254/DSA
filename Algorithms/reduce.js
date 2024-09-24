const result = {
    "2": 5,
    "3": 7,
    "4": 9,
}

console.log(Object.keys(result).reduce((a,b) => result[a] > result[b] ? a : b))