const isLeapYear = (year) => {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log(`Rok ${year} jest rokiem przestępnym`)
        return true}
    else {console.log("Podany rok nie jest rokiem przestepnym")
        return false}
}
isLeapYear(2020)

//new Date - leap year trick. Day "0" is the last day of month before if it is equal 29 then return is true
function itIsLeapYear(year) {return new Date(year, 2, 0).getDate() === 29}
console.log(itIsLeapYear(1996))