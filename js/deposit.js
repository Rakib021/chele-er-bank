// event handle deposit button

document.getElementById("deposit-btn").addEventListener('click',function (){
    //get input value
    const depositInputField = document.getElementById("deposit-input-field");
    const depositAmount = depositInputField.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById("depositTotal");
    const currentDepositTotal = depositTotal.innerText;
    // console.log(currentDepositTotal,depositAmount);

    const newDepositTotal = parseFloat(currentDepositTotal) + parseFloat(depositAmount);

    depositTotal.innerText =newDepositTotal; 

  //get Balance field

  const balanceDepositTotal = document.getElementById("balanceTotal");

  const curentDepositBalanceTotal = balanceDepositTotal.innerText;

  const newDepositBalance = parseFloat(curentDepositBalanceTotal) + parseFloat(newDepositTotal);
  balanceDepositTotal.innerText =newDepositBalance;






    //clear input depositInputField
    depositInputField.value ='';
})