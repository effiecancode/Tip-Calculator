'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function () {
        const billAmount = parseFloat(document.getElementById("billAmount").value);

        if (!isNaN(billAmount)) {
            const result = calculateTipAndTotal(billAmount);
            resultDiv.textContent = result;
        } else {
            resultDiv.textContent = "Please enter a valid bill amount.";
        }
    });
});

function calculateTipAndTotal(billValue) {
    let tipPercentage;

    if (billValue >= 50 && billValue <= 300) {
        tipPercentage = 0.15;
    } else {
        tipPercentage = 0.20;
    }

    const tipAmount = billValue * tipPercentage;
    const totalAmount = billValue + tipAmount;

    return `\nYour Bill: $${billValue},
    \nYour Tip: $${tipAmount.toFixed(2)},
    \nYour Total: $${totalAmount.toFixed(2)}`;
}
