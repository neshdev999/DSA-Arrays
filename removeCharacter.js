/*
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

    Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
    Output: 'Bttl f th Vwls: Hw vs. Grzny'


*/

function removeChars(string, chars) {
    const string = string.split('');
    const chars = chars.split('');
    const result = [];

    for (let el of string) {
        if (!chars.includes(el)) {
            result.push(el);
        }
    }

    return result.join('');
}
removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');


//O(n * k), number of chars in the sentance times the number of chars to remove