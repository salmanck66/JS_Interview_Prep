//Object Literal

let a = {
    name : "salman",
    age : 23
}
//Object constructor
let b = Object()
b.name = "Subh"
console.log(b)
//Object's create method:
let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  }
  let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    }
  }
  var car = Object.create(vehicle, carProps);
  console.log(car);
//   Function constructor:
function Persons() {}
Person.prototype.name = "Sudheer";
var object = new Persons();
console.log(object)

//Object's assign method:
const orgObject = { company: 'XYZ Corp'};
const carObject = { name: 'Toyota'};
const staff = Object.assign({}, orgObject, carObject);

//ES6 Class syntax:
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  var object = new Person("Sudheer");