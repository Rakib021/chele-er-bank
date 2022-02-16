
document.getElementById("withdraw-btn").addEventListener('click',function(){

    //get withdraw input field
    const withdrawInputField = document.getElementById("withdraw-input-field");
    const withdrawAmount = withdrawInputField.value;

    const withdrawTotal = document.getElementById("withdrawTotal");
    const currentWithdrawAmount = withdrawTotal.innerText;

    const newWithDrawAmount = parseFloat(currentWithdrawAmount) + parseFloat(withdrawAmount);
   
    withdrawTotal.innerText = newWithDrawAmount;

  //get Balance field

  const balanceWithdrawTotal = document.getElementById("balanceTotal");

  const balanceAmount = balanceWithdrawTotal.innerText;

  const newBalance = parseFloat(balanceAmount)- parseFloat(newWithDrawAmount);

balanceWithdrawTotal.innerText = newBalance;

    //clear withdrawField

    withdrawInputField.value = '';

})