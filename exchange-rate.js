let exchangeForm = document.getElementById("excangeRate");
let log = document.getElementById("log");
let regExp = /[A-Z]/;

exchangeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let exchangeAmountInput = document.getElementById("amountVal");
    const exchangeAmountInputValue = exchangeAmountInput.value; // 'BNBBTC';
    console.log(exchangeAmountInputValue.match(regExp));
    if (exchangeAmountInputValue.match(regExp) === null) {
        throw new TypeError('Wrong data type')
    } else {
        fetch('https://api2.binance.com/api/v3/ticker/24hr')
            .then(res => res.json())
            .then(data => {
                const binanceData = data.filter(item => {
                    return item.symbol === exchangeAmountInputValue;
                });
                log.textContent = '$' + Math.round(`${binanceData[0].volume}`);
            }).catch(err => console.log(err));
        exchangeAmountInput.value = '';
    }

});


// examples request BNBBTC, QTUMBUSD, FTTUSDT - https://api2.binance.com/api/v3/ticker/24hr
// in this case, we can log a table of all needed values but I decided to get just 1 current at this moment ...