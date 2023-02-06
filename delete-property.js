function deleteProperty (arr){
    // console.log(myArr);
    if(Object.keys(myArr[0]) == myArr[1]){
        delete Object.keys(myArr[0]);
        console.log('yes')
    }
    else{
        console.log('no')
    }
}

let myArr = [{fname: 'jhon',}, 'fname'];
deleteProperty(myArr);



// function deleteProperty (arr){
//     for(var i = 0; i<myArr.length; i++){
//         let index = i;
//         let element = myArr[i];
//         // console.log(element);
//         if(Object.keys(myArr[0]) == myArr[1]){
//             console.log("yes")
//         }
//         else{
//             console.log('no')
//         }
//     }
// }

// let myArr = [{fname: 'jhon',}, 'fname2'];
// deleteProperty(myArr);