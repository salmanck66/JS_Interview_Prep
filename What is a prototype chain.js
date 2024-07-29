const a = {
    name: "salman"
};

// Create a new prototype object
const newProto = {
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};

// Set the new prototype
a.__proto__ = newProto;

console.log(Object.getPrototypeOf(a)); // Logs: newProto object
console.log(a.greet()); // Logs: "Hello, salman!"
