const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formattedValue;
};

const printHtml = (finalTip) => {
    const tipTable = document.createElement("table");
    tipTable.innerHTML = `
        <tr>
            <td>Sum before Tip: </td> <td>${finalTip.sum}</td>
        </tr>
        <tr>
            <td>Tip Percentage: </td> <td>${finalTip.tipPercentage}</td>
        </tr>
        <tr>
            <td>Tip: </td> <td>${finalTip.tip}</td>
        </tr>
        <tr>
            <td>Total amount: </td> <td>${finalTip.total}</td>
        </tr>
    `;
    document.querySelector("main").append(tipTable);

};

const tipCalculator = (sum, tipPercentage, locale, currency, callback) =>{ // argument name can be anything. for naming convention, passing callback as arg name 
    let tip = sum * (tipPercentage / 100);
    let total = sum + tip;

    const finalTip = {
        sum: formatter(locale, currency, sum),
        tipPercentage: tipPercentage + '%',
        tip: formatter(locale, currency, tip),
        total: formatter(locale, currency, total),
    };
    callback(finalTip)
};

tipCalculator(33, 18, "de-DE", "EUR", printHtml);
