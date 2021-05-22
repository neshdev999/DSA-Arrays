/*

Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

    Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
    Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]


*/


function mergeArrays(array1, array2) {
    let newArray = []
    let idx1 = 0
    let idx2 = 0
    let currentIdx = 0

    while (currentIdx < (array1.length + array2.length)) {
        let array1Empty = idx1 >= array1.length
        let array2Empty = idx2 >= array2.length

        if (!array1Empty && (array2Empty || (array1[idx1] < array2[idx2]))) {
            newArray[currentIdx] = array1[idx1]
            idx1++
        } else {
            newArray[currentIdx] = array2[idx2]
            idx2++
        }
        currentIdx++
    }
    return newArray
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

/*
O(n) where n is the combined amount of numbers. We iterate over both arrays at the same time and keep track of where we are in each with an index variable. Much better performance than if we were to have used a nested loop.

*/