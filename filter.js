function filterLessThanFive(arr) { // O(n)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arr.splice(i, 1)
        }
    }

    return arr;
}