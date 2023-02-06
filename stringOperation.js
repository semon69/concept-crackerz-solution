function stringCombine(str1, str2){
    // let addString = str1.concat(" ",str2);
    // return addString;
    let addString = str1 + ' ' + str2;
    return addString;
}
const str1 = 'I am going to be';
const str2 = 'an awesome web developer';
console.log(stringCombine(str1, str2));