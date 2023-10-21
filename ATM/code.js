"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let balance = 400000;
let Password = 123;
let accountNo = 123456789;
let userAccountNo = parseInt(prompt("Enter your Account No"));
let userPassword = parseInt(prompt("Enter your Password"));
if (userAccountNo === accountNo && userPassword === Password) {
    let userName = "Sufiyan";
    console.log(`Welcome ${userName}, your current balance is ${balance}`);
    let withdrawal = parseInt(prompt("How much money do you want to withdraw?"));
    if (withdrawal > balance) {
        console.log(`Insufficient balance`);
    }
    else {
        let remainingBalance = balance - withdrawal;
        console.log(`Your remaining balance is ${remainingBalance}`);
    }
}
else {
    console.log(`Wrong password or account number. Please try again.`);
}
