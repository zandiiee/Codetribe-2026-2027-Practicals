let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let i = 0;
function evenNumbers(){
    while (i < num.length){
        if(num [i] % 2 === 0){
            console.log(num[i])
        }
        i++
    }
}
console.log(evenNumbers(num));



for (let i =1; i <= 10; i++) {
    if (i === 3 || i === 6){
        continue;
    }
        console.log(i)
}

function nested(){
    
for (let i =1; i <= 10; i++) {
    for ( let o = 1; o <=10 ; o++){
    if (i === 3 || i === 6){
        continue;
    }
        console.log(i , o)
}
}
}