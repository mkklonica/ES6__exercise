const howManyYearFinished = (year,month,day) =>{
    let today = new Date()        // Setting your local time by Data Object
    console.log(today.toUTCString())        // GMT+0
    const yourBirthday = new Date(year, month-1, day)
    console.log(`today ${today} \nbirthday ${yourBirthday}`)
    const yearDifference = today.getFullYear() - yourBirthday.getFullYear()
    yourBirthday.setFullYear(today.getFullYear())       //set preset year to our birthday

    return today < yourBirthday ? yearDifference-1 : yearDifference
}
console.log(howManyYearFinished(1997,4,18))

const d = new Date(2019,9,13)   
const nd = new Date()
d.setFullYear(nd.getFullYear()) // setting year for d object (parameter return year out of local data )
if(d > nd){                 // if date d is bigger than nd condition === true, compare month and day of 2020
    console.log("You can pass")
}
else console.log("You are too young")