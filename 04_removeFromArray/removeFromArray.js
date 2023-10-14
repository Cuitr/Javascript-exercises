let originArray = [[1,2,3,4],3];
function removeFromArray(array, num){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] === num){
                array[i].splice(j, 1);
                j--;
            }
        }
        if(array[i] === 3){
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
removeFromArray(originArray, 3);
// Do not edit below this line
module.exports = removeFromArray;
