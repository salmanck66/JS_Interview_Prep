const a = {
    name : "salman"
}
const b = {
    name : "sahal;"
    
}
function getName (age )
{
    return `${this.name} is ${age}`
} 
function getNameAge (hobby,age )
{
    return `${hobby} is hobby age is  ${age}`
} 
function getNameBind (age )
{
    return `${this.name} is ${age}`
} 
//call
console.log(getName.call(a,23))
//apply
console.log(getNameAge.apply(b,["Call",18]))
//bind
const newFun = getNameBind.bind(a,21)
console.log(newFun())

