// JavaScript Object Functions and Methods

// 1. Object.create(proto, [propertiesObject])
// Creates a new object with the specified prototype object and properties.
const proto = { greet() { console.log("Hello"); } };
const obj = Object.create(proto);
obj.greet(); // Output: Hello

// 2. Object.defineProperty(obj, prop, descriptor)
// Defines a new property or modifies an existing property on an object.
const person = {};
Object.defineProperty(person, 'name', {
  value: 'Alice',
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(person.name); // Output: Alice

// 3. Object.defineProperties(obj, properties)
// Defines multiple new properties or modifies existing properties on an object.
Object.defineProperties(person, {
  age: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
  },
  job: {
    value: 'Engineer',
    writable: false,
    enumerable: true,
    configurable: true
  }
});
console.log(person.age); // Output: 30
console.log(person.job); // Output: Engineer

// 4. Object.entries(obj)
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const user = { name: 'John', age: 25 };
console.log(Object.entries(user)); // Output: [ [ 'name', 'John' ], [ 'age', 25 ] ]

// 5. Object.freeze(obj)
// Freezes an object, preventing new properties from being added, existing properties from being removed, or existing properties from being modified.
const car = { brand: 'Toyota' };
Object.freeze(car);
car.brand = 'Honda'; // Change will not take effect
console.log(car.brand); // Output: Toyota

// 6. Object.fromEntries(entries)
// Converts a list of key-value pairs into an object.
const entries = [['foo', 'bar'], ['baz', 42]];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries); // Output: { foo: 'bar', baz: 42 }

// 7. Object.getOwnPropertyDescriptor(obj, prop)
// Returns a property descriptor for a named property of an object.
const descriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log(descriptor); // Output: { value: 30, writable: true, enumerable: true, configurable: true }

// 8. Object.getOwnPropertyDescriptors(obj)
// Returns all own property descriptors of an object.
console.log(Object.getOwnPropertyDescriptors(person));

// 9. Object.getOwnPropertyNames(obj)
// Returns an array of all own property names of an object.
console.log(Object.getOwnPropertyNames(person)); // Output: [ 'name', 'age', 'job' ]

// 10. Object.getPrototypeOf(obj)
// Returns the prototype of the specified object.
console.log(Object.getPrototypeOf(obj)); // Output: { greet: [Function: greet] }

// 11. Object.is(value1, value2)
// Determines whether two values are the same value.
console.log(Object.is(0, -0)); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true

// 12. Object.isExtensible(obj)
// Determines if an object is extensible (i.e., if new properties can be added).
console.log(Object.isExtensible(person)); // Output: true

// 13. Object.isFrozen(obj)
// Determines if an object is frozen.
console.log(Object.isFrozen(car)); // Output: true

// 14. Object.isSealed(obj)
// Determines if an object is sealed (i.e., not extensible and all properties are non-configurable).
console.log(Object.isSealed(person)); // Output: false

// 15. Object.keys(obj)
// Returns an array of a given object's own enumerable property names.
console.log(Object.keys(user)); // Output: [ 'name', 'age' ]

// 16. Object.preventExtensions(obj)
// Prevents new properties from being added to an object.
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); // Output: false

// 17. Object.seal(obj)
// Seals an object, preventing new properties from being added, and marking all existing properties as non-configurable.
Object.seal(person);
console.log(Object.isSealed(person)); // Output: true

// 18. Object.values(obj)
// Returns an array of a given object's own enumerable property values.
console.log(Object.values(user)); // Output: [ 'John', 25 ]

// 19. Object.assign(target, ...sources)
// Copies all enumerable own properties from one or more source objects to a target object.
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target); // Output: { a: 1, b: 2, c: 3 }
