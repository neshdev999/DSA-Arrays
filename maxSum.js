function maxSum(array) {
    let currentSum = 0;
    let currentHighest = array[0]; // We'll initialize this with array[0] instead of 0 in case we have an array with all negative numbers

    array.forEach(number => {
        currentSum += number;
        if (currentSum > currentHighest) {
            currentHighest = currentSum;
        }
    })

    return currentHighest;
}

let output = maxSum([4, 6, -3, 5, -2, 1]);
console.log(output);