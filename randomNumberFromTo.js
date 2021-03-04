// Math.radom() =number form 0 to 1
const setRandomRange = (min, max) =>{
    if(max < min)
        [max, min] = [min, max]     //swap variable
    const setRadom = Math.random() * (max-min + 1) + min
    return Math.floor(setRadom, 10)   // parseInt(randomNumber, 10)
}
console.log(setRandomRange(100,50))