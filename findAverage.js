function average (arrOfMarks){

    let sum = 0;
    // let averageMarks = sum / arrOfMarks.length;
    for(let i = 0; i < arrOfMarks.length; i++){
        let marks = arrOfMarks[i];
        sum = sum + marks;
    }
    let averageMarks = (sum / arrOfMarks.length).toFixed(2);
    averageMarks = parseFloat(averageMarks);
    return averageMarks;
    

}

// const arrOfMarks = [100, 100, 100, 100, 100];
const arrOfMarks = [75.25, 65, 80, 35.45, 99.50];
console.log(average(arrOfMarks));