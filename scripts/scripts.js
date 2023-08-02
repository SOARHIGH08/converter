function convertCurrency() {
    let amount = parseFloat(document.getElementById("amountInput").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
   
    let fromCurr = 0;
    let toCurr = 0;
    let result = 0;

    if (fromCurrency == "USD") {
        fromCurr = 1.00;
    } else if (fromCurrency == "EUR") {
        fromCurr = 0.85;
    } else if (fromCurrency == "PHP") {
        fromCurr = 55.55;
    }
    
    console.log(fromCurr); 

    if (toCurrency == "USD") {
        toCurr = 1.00;
    } else if (toCurrency == "EUR") {
        toCurr = 0.85;
    } else if (toCurrency == "PHP") {
        toCurr = 55.55;
    }

    result = (amount * toCurr) / fromCurr;
    
    document.getElementById("result").innerHTML = "Total: " + result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2});
}