//Given two strings, write a method to decide if one is a permutation of the other
// If an empty string ("") is used as the separator, the string is split between each character.
// If separator is an empty string, all elements are joined without any characters in between them.

function checkPermute(stringOne, stringTwo){
    //if different lengths, return false
    if (stringOne.length !== stringTwo.length){
        return false;
    } else {
        var sortedStringOne = stringOne.split('').sort().join('');
        var sortedStringTwo = stringTwo.split('').sort().join('');
        return sortedStringOne === sortedStringTwo;
    }

};

checkPermute('abcde', 'edcba');
