class ValidatorNip {
    static validatorNip(nip){
        nip = nip.replace(/[s\-]/g, '')        //regexp replace '-' and white space by empty string
        const weight = [6,5,7,2,3,4,5,6,7]
        let sum = 0
        nip = nip.slice(-10)                // in case of e.g "GB+number", "PL+number"
        const nipArr = [...nip]
        nipArr.forEach((value, index) => {
            if(index === 9) return;
            sum += (value * weight[index])
        })
        return (sum % 11) === parseInt(nipArr.pop(),10)
    }
}
const bool = ValidatorNip.validatorNip('5532363119')
if(bool === true)
    console.log("Correct NIP")
else console.log("Wrong NIP")