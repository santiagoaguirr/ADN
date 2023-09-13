
function armarSetComunes(array1,array2){
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    const SetComunes = new Set();

    for(const elemento of set1){
        if(set2.has(elemento)){
            SetComunes.add(elemento);
        }
    }
    return SetComunes;
};

let array1 = [1,2,3,4];
let array2 = [1,2,3,4,5,6];



const setElemComunes = armarSetComunes(array1,array2)

console.log(setElemComunes);