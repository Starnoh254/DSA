function sum (args){
    let sum = 0;
    for (let i = 0; i < args.length ; i ++){
        sum += args[i]
    }

    return sum;

}

function mean (sum , n){
    return sum / n;
}

function sumOfSquaredDifferences(data , mean){
    let sum = 0;
    for (let i = 0 ; i < data.length ; i ++){
        let difference = data[i] - mean;
        sum += difference * difference;
    }
    return sum;
}

function standardDeviation (sum , n){
    return Math.sqrt(sum / (n - 1))
}

// let data = [38, 51, 46, 79, 57];
let data = [812, 982, 836, 769];
let summation = sum(data)
let _mean = mean(summation , data.length )
let sosd = sumOfSquaredDifferences(data , _mean)

console.log(standardDeviation(sosd , data.length))