//tipCalculator(33,18); // cannot access the method. it should be called after the initialization

const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formattedValue;
};
//console.log(formatter("de-DE", "EUR", 23));

const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    console.log(`
    Sum before tip: ${formatter(locale, currency, 23)}
    Tip percentage: ${percentage}%
    Tip: ${formatter(locale, currency, tip)}
    Total: ${formatter(locale, currency, total)}
    `);
};
console.log(`Tip calculation in Euros`)
tipCalculator(33, 18, "de-DE", "EUR");

