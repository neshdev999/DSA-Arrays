/*

Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

    Input:

    [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]];

    Output:

    [[0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,1,0],
    [0,0,0,0,0],
    [0,0,1,1,0]];

*/


// We'll have to iterate over element in the array to check for 0
// If we hit a 0, we'll have to iterate height+width times

function detonateZeroes(array) {
    let zeroes = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                zeroes.push([i, j])
            }
        }
    }

    zeroes.forEach(zero => {
        let row = zero[0];
        let column = zero[1];

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (i === row || j === column) {
                    array[i][j] = 0;
                }
            }
        }
    })

    return array;
}
detonateZeroes(
    [
        [1, 0, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1]
    ]
);
// O(2n^2)