const arrA = [2,4,6,9]
const arrB = [3,5,7,9]
const commonSet = (arrA,arrB) => {
    const newComonArray = arrA.filter( (element) => {
        return arrB.includes(element)
    })
    if(newComonArray.length === 0)
        return null
    
    return [...new Set(newComonArray)]
}
const newArray = commonSet(arrA, arrB)
console.log(newArray)


