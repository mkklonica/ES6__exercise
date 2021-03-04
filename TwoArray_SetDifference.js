const arrA = [1,2,3,4,5]
const arrB = [4,5,6,7,8]
//Sum of unique elements in both arrays
const setDifference = (arrA, arrB) => { 
    let newArray = arrA.filter(             //add element to newarray if element form arrayA isn't common for arrayB    
        element => !arrB.includes(element) )  
            .concat(                        //adding unique elemets from arrayB (uniqe element's arrayA + unique element's arrayB)
                arrB.filter(element =>
                !arrA.includes(element) )   // return true if element form arrayB isn't include in arrayB ) 
                    )
    return newArray
}

console.log(setDifference(arrA,arrB))
