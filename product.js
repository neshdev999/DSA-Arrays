/*

Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

    Input:[1, 3, 9, 4]
    Output:[108, 36, 12, 27]

*/



let input = [1, 3, 9, 4];

let givenArrayLength = input.length;

let outputArray = [];
for (let i = 0; i < givenArrayLength; i++) {

    let product = 1;
    for (let element of input) {
        if (element !== input[i]) {
            product = product * element;
        }
    }
    outputArray.push(product);
}

console.log(outputArray);


/*

O(n2) It might be possibly to improve upon this complexity
*/