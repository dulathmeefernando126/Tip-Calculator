const Amount = document.getElementById("amount");
const tipPercentage = document.getElementById("tip");
const result = document.getElementById("result");
const Button = document.getElementById("btn");

Button.addEventListener("click", function() {
    let newAmount = calculateTip(Amount.value, tipPercentage.value);
    result.textContent = `${newAmount.toFixed(2)}`;
})


function calculateTip(Amount, tip) {
    let amountValue = parseFloat(Amount);
    let tipValue = parseFloat(tip);

    let tipDecimal = tipValue / 100;
    let percentage = amountValue * tipDecimal;

    let newValue = percentage + amountValue;
    return newValue;
}