
function bankingFee(){
    let fee = 0.004;
    let amount = 7000;
    var totalAmount = fee * amount;
    console.log("your charge has amounted to " + totalAmount);
}
bankingFee(7900, 2)

function calculateBankFee(fee , transaction){
    let charge;
    if(transaction == "monthlyFee"){
        charge = 20;
    } else if ( transaction == "depositFee"){
        charge = 10;
    } else if (transaction == "withdrawalFee"){
        charge = 5;
    }
    let total = fee * transaction;
    console.log(charge);
}
calculateBankFee( 600 , "monthlyFee")
calculateBankFee( 100 , "depositFee")
calculateBankFee( 300 , 'withdrawalFee')