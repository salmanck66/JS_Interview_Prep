function ret(arr,callback)
{
    arr.splice(2,4,3,4)
    console.log(arr)
    callback(arr)
}

ret([1,213,21,3,213,213,],(arr)=>console.log("Completed",arr))