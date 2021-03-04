function objectCountFromArray(takeArray) {
    const objectformArray = {}
    for(const arrayValue of takeArray){
        if(objectformArray.hasOwnProperty(arrayValue))
            objectformArray[arrayValue] += 1
        else objectformArray[arrayValue] = 1
    }
    return objectformArray
}
const arr = ["A","a","b","a","b"]
console.log(objectCountFromArray(arr))

/* new Object from Array.prototype.reduce()
const countValue = (arr) => arr.reduce((newObj, key) => {
    if(newObj[key])  newObj[key] += 1
    else newObj[key] = 1
    return newObj
},  {})
console.log(countValue(arr)) */
