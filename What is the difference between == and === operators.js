// Comparison explanations

// 1. 0 == false
// Cause: Type coercion converts false to 0.
console.log(0 == false); // true

// 2. 0 === false
// Cause: Strict equality checks both value and type.
console.log(0 === false); // false

// 3. 1 == "1"
// Cause: Type coercion converts "1" to 1.
console.log(1 == "1"); // true

// 4. 1 === "1"
// Cause: Strict equality checks both value and type.
console.log(1 === "1"); // false

// 5. null == undefined
// Cause: null and undefined are considered equal in non-strict equality.
console.log(null == undefined); // true

// 6. null === undefined
// Cause: Strict equality checks both value and type.
console.log(null === undefined); // false

// 7. '0' == false
// Cause: Type coercion converts '0' to 0 and false to 0.
console.log('0' == false); // true

// 8. '0' === false
// Cause: Strict equality checks both value and type.
console.log('0' === false); // false

// 9. NaN == NaN
// Cause: NaN is not equal to anything, including itself.
console.log(NaN == NaN); // false

// 10. NaN === NaN
// Cause: NaN is not equal to anything, including itself.
console.log(NaN === NaN); // false

// 11. [] == []
// Cause: Different array instances in memory are compared.
console.log([] == []); // false

// 12. [] === []
// Cause: Different array instances in memory are compared.
console.log([] == []); // false

// 13. {} == {}
// Cause: Different object instances in memory are compared.
console.log({} == {}); // false

// 14. {} === {}
// Cause: Different object instances in memory are
console.log((018)-(015));
//5