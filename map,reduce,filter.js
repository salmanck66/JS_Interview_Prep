console.log([10,22,34,324,23,4,324,23,432,4,234,32,4].map((item)=>
item*2
)
)

console.log([10,22,34,324,23,4,324,23,432,4,234,32,4].filter((item)=>
    item>2
    )
    )

    console.log([1, 2, 3, 4, 5].reduce((acc, curr) => {
        console.log("acc",acc , "curr",curr); // Log the accumulator at each step
        return acc + curr; // Return the updated accumulator
    },0)); 
    