const repeatString = function(string, repeatTime) {
    let newString = ``;
for (let i = 0; i < repeatTime; i++){
    newString += string;
}
return newString;
};
repeatString(`hey`, 3);

// Do not edit below this line
module.exports = repeatString;
