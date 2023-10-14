const reverseString = function(string) {
let array = [];
for(let i = 0; i <= string.length; i++){
    array.push(string[string.length - i]);
}
return array.join(``);
};
reverseString(`hello`);
// Do not edit below this line
module.exports = reverseString;
