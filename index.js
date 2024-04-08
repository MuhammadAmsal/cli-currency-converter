import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.yellowBright.bold("\n\t Wellcome to Muhammad Amsal Currency Converter\n"));
// LIST OF CURRENCIES AND THEIR RATES
let exchange_rates = {
    "USD": 1,
    "PKR": 278,
    "INR": 90,
    "JYP": 113,
    "CAD": 1.3,
    "EUR": 0.9,
    "AUD": 1.65,
    "IRR": 42078,
    "QAR": 3.64,
    "SAR": 3.75
};
let userAnswer = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Please Select the currency you convert from",
        choices: ["USD", "PKR", "INR", "JYP", "CAD", "EUR", "AUD", "IRR", "QAR", "SAR"]
    }, {
        name: "toCurrency",
        type: "list",
        message: "Please Select the currency you convert into",
        choices: ["USD", "PKR", "INR", "JYP", "CAD", "EUR", "AUD", "IRR", "QAR", "SAR"]
    }, {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert",
    }
]);
// currency conversion
let from_currency = exchange_rates[userAnswer.fromCurrency];
let to_currency = exchange_rates[userAnswer.toCurrency];
let amount = userAnswer.amount;
// currency convert
let base_amount = amount / from_currency;
let convertedAmount = base_amount * to_currency;
console.log(`Your Amount from ${chalk.yellowBright.bold(userAnswer.fromCurrency)} to ${chalk.yellowBright.bold(userAnswer.toCurrency)} is: ${chalk.blueBright.bold(convertedAmount.toFixed(2))}`);
