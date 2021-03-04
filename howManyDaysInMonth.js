const howmanyDayInMonth = (year, month) => { 
    if(parseInt(month) > 0 && parseInt(month) < 13){
        const monthVar = new Date(year,month,0).getDate()
        return monthVar
    }
    else throw Error("Invalid date")
}
console.log(howmanyDayInMonth(2040, 2))
