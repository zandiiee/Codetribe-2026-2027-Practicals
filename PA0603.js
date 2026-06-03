let marks= [78,90,30,79,56,90,76]

function calculateMarks(){
    let totalmarks = 0;
    for (let i = 0 ; i <marks.length; i++){
        totalmarks+=marks[i];

    }
    return totalmarks ; 
}
calculateMarks();
console.log( calculateMarks())