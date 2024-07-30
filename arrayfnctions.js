

let arr = [];
arr.push(1, 2, 3, 4, 34, 3, 43, 24, 324, 32, 432);
console.log("Array push:", arr); // Adds elements to the end of the array

arr.pop();
console.log("Array pop:", arr); // Removes the last element of the array

arr.shift();
console.log("Array shift:", arr); // Removes the first element of the array

arr.unshift(10);
console.log("Array unshift:", arr); // Adds elements to the beginning of the array

arr.sort((a, b) => b - a);
console.log("Array sort (descending):", arr); // Sorts the array in descending order

arr.reverse();
console.log("Array reverse:", arr); // Reverses the order of the array elements

console.log("Array slice (0,5):", arr.slice(0, 5)); // Creates a shallow copy of a portion of the array

arr.splice(0, 2, 1, 2);
console.log("Array splice:", arr); // Changes the contents of the array by removing or replacing elements

arr.fill(2, 0, arr.length);
console.log("Array fill:", arr); // Fills the array with a static value

console.log("Array concat:", arr.concat([12, 32, 3, 213, 21])); // Combines multiple arrays

console.log("Array join (with '-'): ", arr.join("-")); // Joins all elements into a string separated by a specified separator

console.log("Array at (10):", arr.at(10)); // Returns the element at the given index (negative index for counting from end)

const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 70000 }
];

employees.forEach(employee => {
    const newSalary = employee.salary * 1.10;
    console.log(`${employee.name}'s new salary is $${newSalary}`);
}); // Executes a function on each element of the array

const result = arr.find(item => item > 10);
console.log("Find (first item > 10):", result); // Finds the first element that satisfies the condition

const allResults = arr.filter(item => item > 10);
console.log("Filter (items > 10):", allResults); // Creates a new array with all elements that satisfy the condition

const mappedResults = arr.map(item => item * 2);
console.log("Map (each item * 2):", mappedResults); // Creates a new array with the results of calling a function on every element

const reducedResult = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce (sum of items):", reducedResult); // Applies a function against an accumulator and each element (from left to right) to reduce it to a single value

const reducedRightResult = arr.reduceRight((acc, curr) => acc + curr, 0);
console.log("ReduceRight (sum of items, right to left):", reducedRightResult); // Same as reduce but from right to left

const foundIndex = arr.findIndex(item => item > 10);
console.log("FindIndex (first index of item > 10):", foundIndex); // Finds the index of the first element that satisfies the condition

const someResults = arr.some(item => item > 400);
console.log("Some (any item > 400):", someResults); // Tests whether at least one element in the array passes the test

const everyResults = arr.every(item => item > 0);
console.log("Every (all items > 0):", everyResults); // Tests whether all elements in the array pass the test

const flatArray = arr.flat();
console.log("Flat (flattened array):", flatArray); // Flattens nested arrays (not much effect in this example as there are no nested arrays)

const flatMapArray = arr.flatMap(item => [item, item * 2]);
console.log("FlatMap (each item and double of each item):", flatMapArray); // Maps each element to an array and flattens the result

const copiedWithinArray = arr.copyWithin(2, 0, 2);
console.log("CopyWithin (copy elements):", copiedWithinArray); // Shallow copies part of the array to another location in the same array

console.log("Array isArray:", Array.isArray(arr)); // Checks if the variable is an array

const fromArray = Array.from(arr);
console.log("Array.from:", fromArray); // Creates a new array instance from an array-like or iterable object

const arrayOf = Array.of(1, 2, 3, 4, 5);
console.log("Array.of:", arrayOf); // Creates a new Array instance with a variable number of elements
