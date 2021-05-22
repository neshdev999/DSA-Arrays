/*

String rotation

Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true



*/


function isRotation(string1, string2) {
    let arr = string1.split('');
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.shift();
        arr.push(temp);
        let rotation = arr.join('')

        if (rotation === string2) {
            return true;
        }
    }
    return false;
}
isRotation('amazon', 'azonma')
    // false
isRotation('amazon', 'azonam')
    // true

// O(n), we iterate once
// for every char in the string