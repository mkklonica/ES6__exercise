const arr = [1,2,1,100,2,5,50,5,0];
const tab = "napis";
const unique = function (array){
    if(!Array.isArray(array)){
        throw Error ("Parametr nie jest tablicą");
    }
    return array.filter(                    //metoda tworzy nową tablice zwracając wartosci unikalne
    (elementArray, indexArray, selfArray) =>
    !selfArray.includes(elementArray, indexArray + 1)       
    //Jeżeli element tablicy elementArray wystąpi w kolejnych iteracjach tablicy zwróci wartość true
    //zwracana wartość zostanie przekonwetowana na false usuwajać ten element z tablicy
)};
const uniqueArray = unique(arr);
console.log(`${arr} \n${uniqueArray}`);

