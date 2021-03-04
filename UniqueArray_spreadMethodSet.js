const arr = [1,2,1,100,2,5,50,5,0,"1"];
const tab = "napis";
const unique = function (array){
    if(!Array.isArray(array)){
        throw Error ("Parametr nie jest tablicą");
    }
    return [...new Set(array)];
};
const uniqueArray = unique(arr);
console.log(`${arr} \n${uniqueArray}`);
 
