function palindrome (name){
    if(!name)
        throw new Error("hey put a name in the function argument"); 
    return name === name.split('').reverse().join('')
}

console.log(palindrome("racecar"))