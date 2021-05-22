const Memory = require('./memory');

const memory = new Memory();
class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    //Retrieving values

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    //Popping values
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    //Inserting values
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }


    //Removing values


    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }



}
Array.SIZE_RATIO = 3;

let newObj = new Array();
newObj.push(5);
newObj.push(6);

// console.log(newObj);
// console.log(newObj[0]);
// console.log(newObj.length);
console.log(memory.get(0));
console.log(memory.get(1));
console.log(memory.get(2));


function main() {

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);


    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);


    console.log(arr.get(0));
    console.log(arr.get(1));
    console.log(arr.get(2));
    console.log(arr.get(3));
    console.log(arr.get(4));
    console.log(arr.get(5));



    arr.pop();
    arr.pop();
    arr.pop();

    console.log('---------------------------')

    console.log(arr.get(0));
    console.log(arr.get(1));
    console.log(arr.get(2));

    console.log(arr);

}


main();

/*

Using the Array class you just created above, add an item to the array. Use the following function:

function main(){
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}

What is the length, capacity and memory address of your array?

1, 3, and 0

Add the following in the main function and then print the array:

...
arr.push(5);
arr.push(15);
arr.push(19);
arr.push(45);
arr.push(10);

What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

6, 18, 45

    We've pushed 6 items onto the array, and it has grown by 3 every time because of the SIZE_RATIO property. Our pointer is now at the 45th place in memory because the previous memory blocks have been taken up by our arrays of sizes 3, 6, 9, 12, 15, and 18. We should probably be clearing those unused blocks of memory.


Exploring the pop() method

Add the following in the main function and then print the array:

  ...
  arr.pop();
  arr.pop();
  arr.pop();

What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

    3, 18, 45

    Length decreases, but the capacy and the memory address have already been shifted by pushing.
Understanding more about how arrays work

Print the 1st item in the array arr.

Empty the array and add just 1 item: arr.push("tauhida");

Print this 1 item that you just added. What is the result? Can you explain your result?

    NaN

    It returns this because the Float64Array class is a typed array that only stores 64-bit floating point numbers.

    The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order.

What is the purpose of the _resize() function in your Array class?

    To allocate a new block of memory for our array when the current block of memory is too small to perform the operation we need

    
*/