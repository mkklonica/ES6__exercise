// function* fibo(){
//     let booleanWhile = true
//     yield 0
//     yield 1
//     yield 1
//     while(booleanWhile){
        
//     }
// }
function fibonacci(NumberOfFibonacci){
    if(NumberOfFibonacci === 1) return 0
    else if (NumberOfFibonacci < 4) return 1
    let first = 0
    let secound = 1
    let third = 1
    let next = 0
    NumberOfFibonacci -= 2
    while(NumberOfFibonacci !== 0){
        next = secound + third
        first = secound
        secound = third
        third = next
        NumberOfFibonacci--
    }
    return next
}
console.log(fibonacci(30))

function arrayFibonacci(whichNumber){
    const number = [0,1]
    for(let i = 2; i <= whichNumber; i++)
        number.push(number[i -2] + number[i-1])
    return number[whichNumber]
}
console.log(arrayFibonacci(30))

function reqFibonacci(whichNumber){
    if (whichNumber < 2)
        return whichNumber
    return reqFibonacci(whichNumber - 2) + reqFibonacci(whichNumber - 1)
}
console.log(reqFibonacci(30))
