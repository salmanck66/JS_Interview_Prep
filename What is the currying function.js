const curriedFun = (a) => (b)=> (c)=>a+b+c

console.log(curriedFun(1)(2)(3))