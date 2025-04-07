const exchangeRates = {
    USD: { EUR: 0.91, INR: 83.2, GBP: 0.78, USD: 1 },
    EUR: { USD: 1.1, INR: 91.3, GBP: 0.85, EUR: 1 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, INR: 1 },
    GBP: { USD: 1.28, EUR: 1.17, INR: 105.6, GBP: 1 }
};

function convertCurrency() {
    
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;

     
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter the right amount.';
        return;
    }

    
    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = 'No need to convert currency!';
        return;
    }

    
    let rate = exchangeRates[fromCurrency][toCurrency];
    
    console.log(`Conversion rate from ${fromCurrency} to ${toCurrency} is ${rate}`);

    
    let result = amount * rate;

    
    document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
}
