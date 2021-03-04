"use strict"
const isPrimeNumber = (primeNumber) =>{
    "use strict"
    for(const value of [2,3,5,7])
        if(value === primeNumber)
            return console.log(primeNumber + " IS prime number")
    if(primeNumber % 2 !== 0 && primeNumber % 3 !== 0)
        return console.log(primeNumber + " IS prime number")
    return console.log(primeNumber + " NOT PRIME NUMBER")
}
isPrimeNumber(14)

// Mathematical check of Prime number
const isPrime = (primeNumber) => {
    if(primeNumber < 3)
        return primeNumber === 2 
    const lastDivider = Math.ceil(Math.sqrt(primeNumber))
    for(let i = 2; i <= lastDivider; i++)
        if(primeNumber % i == 0) return false
    return true
}
console.log(isPrime(7))