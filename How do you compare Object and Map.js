const obj3 = { a: 1, b: 2, c: 3 };
const map3 = new Map([["a", 1], ["b", 2], ["c", 3]]);

console.log(Object.keys(obj3).length); // 3
console.log(map3.size); // 3
const obj2 = {};
const map2 = new Map();

obj2["b"] = 1;
obj2["a"] = 2;
obj2["c"] = 3;

map2.set("b", 1);
map2.set("a", 2);
map2.set("c", 3);

console.log(Object.keys(obj2)); // ['b', 'a', 'c']
console.log([...map2.keys()]); // ['b', 'a', 'c']


// 1. Using the new Map() constructor
const map1 = new Map();

// 2. Initializing a Map with an array of key-value pairs
const map21 = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);

// 3. Using the set method
const map31 = new Map();
map3.set("key1", "value1");
map3.set("key2", "value2");
map3.set("key3", "value3");

// 4. Cloning an existing Map
const originalMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
const clonedMap = new Map(originalMap);

// 5. From an array of objects
const array = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
const mapFromObjects = new Map(array.map(item => [item.id, item]));

// 6. From an Object (Plain Object)
const obj = {
    key1: "value1",
    key2: "value2"
};
const mapFromObject = new Map(Object.entries(obj));

console.log(map1);
console.log(map21);
console.log(map31);
console.log(clonedMap);
console.log(mapFromObjects);
console.log(mapFromObject);
