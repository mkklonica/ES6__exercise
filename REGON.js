 function controlSum(nrREGON,lengthREGON){
    if(lengthREGON === 9 ){
        const weight = [8,9,2,3,4,5,6,7]
        let sum = 0
        for(let i = 0; i<8; i++)
            sum += nrREGON[i] * weight[i]
        return sum
    }
    else if(lengthREGON === 14){
        const weigth = [2,4,8,5,0,9,7,3,6,1,2,4,8]
        let sum = 0
        for(let i = 0; i<13; i++)
            sum += nrREGON[i] * weigth[i]
        return sum
    }
    else ("Incorrect REGON or Length")
 }
 function regonValidation9(nrREGON){
    const nrREGONSplice = nrREGON.slice(0,9)
    if(nrREGONSplice.length !== 9) throw Error("Incorrect REGON number")
    let controlNumber = controlSum(nrREGONSplice, 9) % 11
    if(controlNumber === 10) controlNumber = 0
    return cosntIsCorrect = controlNumber === Number(nrREGON[8]) ? true : false
}
function regonValidation14(nrREGON){
    if(nrREGON.length !== 14) throw Error("Incorrect REGON number")
    const nativeREGON = nrREGON.slice(0,9)
    if(regonValidation9(nativeREGON) === true){
        let controlNumber = controlSum(nrREGON, 14) % 11
        if(controlNumber === 10) controlNumber = 0
        return controlNumber === Number(nrREGON[13]) ? true : false  //  Number(nrREGON[13]) equal parseInt(nrREGON.slice(-1),10)
    }
}
//REGON as a number:
const REGON = 302690873//23511332857188

const REGONString = REGON.toString()
if(REGONString.length === 9) console.log(`Short REGON ${regonValidation9(REGONString)}`);
else if(REGONString.length === 14) console.log(`Long REGON ${regonValidation14(REGONString)}`);
else console.log("Something go wrong check your REGON number");
