const arr = [34,3,4,24,23,4,324,324,324]

const newref = arr
const newDeep = [...arr]

newref.splice(0,4)
console.log(arr)
console.log(newref)
console.log(newDeep)


const a = 3
let b=4
b=45
console.log(a)
console.log(b)