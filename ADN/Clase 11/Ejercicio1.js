
let array = [1,2,3,4,5,6,7,8,9,10];
let sumatoria = 0;
function SumarElemArray(vector){

    for(let i=0;i<vector.length;i++){
        if(vector[i]%2 == 0){
            sumatoria = sumatoria + vector[i];
        }
    }
    
    return sumatoria;
}

console.log(SumarElemArray(array));


