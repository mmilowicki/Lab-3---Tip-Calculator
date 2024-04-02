document.addEventListener('DOMContentLoaded', function() {
    var billTotalInput = document.getElementById('billTotal');
    var tipSlider = document.getElementById('tipSlider');
    var tipPercentageDisplay = document.getElementById('tipPercentage');
    var tipAmountDisplay = document.getElementById('tipAmount');
    var totalBillDisplay = document.getElementById('totalBill');
    var tipForm = document.getElementById('tip-form'); 

    function calculateTip() {
        var billTotal = parseFloat(billTotalInput.value);
        if (isNaN(billTotal)) {
            billTotal = 0;
        }
        var tipPercent = parseInt(tipSlider.value, 10);
        tipPercentageDisplay.value = tipPercent + '%';
        
        var tipAmount = billTotal * (tipPercent / 100);
        tipAmountDisplay.value = '$' + tipAmount.toFixed(2);
        
        var totalBill = billTotal + tipAmount;
        totalBillDisplay.value = '$' + totalBill.toFixed(2);
    }

    tipForm.addEventListener('input', calculateTip);
});
