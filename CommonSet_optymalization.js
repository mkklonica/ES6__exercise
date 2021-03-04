function intersection(arrOne, arrTwo){
    let result = []
    const shorterArray = (arrOne.length < arrTwo.length) ? arrOne : arrTwo;
    for (let i= 0; i < shorterArray.length; i++ )
        if(shorterArray === arrOne){
            if(arrTwo.indexOf(shorterArray[i]) !== -1)
                result.push(shorterArray[i])
        }
        else{
            if(arrOne.indexOf(shorterArray[i]) !== -1)
            result.push(shorterArray[i])
        }
    return result 
}
console.log(intersection([1,2,6,8,5,6,45,56],[2,45,1,5,7,3,8,8,6,1,1]))
