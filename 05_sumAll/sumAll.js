const sumAll = function(num1, num2) {
    let numArr = [];
    let sum = 0;
    do{
        numArr.push(num1);
        num1++
    }while(num1 <= num2);
    
    for(let i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
};
sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
