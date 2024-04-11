const timerId = setTimeout(() => {
    console.log("Timer executed")
} , 1000)

clearTimeout(timerId)

console.log(timerId); // prints the id of the timer