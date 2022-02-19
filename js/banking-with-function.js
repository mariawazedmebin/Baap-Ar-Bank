function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear the withdraw input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

//handle diposit button
document.getElementById('deposit-button').addEventListener('click', function () {

    //get the amount
    /* const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */
    const depositAmount = getInputValue('deposit-input');

    //update deposit

    /* 
    const depositTotal = document.getElementById('deposit-total');

    //p,h1-h4 ader vitor text change korte innerText use hy &&&& input tag ar vitor hle value use hy
    
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmount + depositAmount;
      */
    updateTotalField('deposit-total', depositAmount);
    // update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    updateBalance(depositAmount, true);


});

//handle diposit button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input');

    //set withdraw total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */
    updateTotalField('withdraw-total', withdrawAmount);
    // update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    updateBalance(withdrawAmount, false);



});