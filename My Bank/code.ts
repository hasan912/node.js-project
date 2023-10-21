import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
import chalk from "chalk";

class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobNumber: number;
    accNumber: number;
    constructor(fName: string, lName: string, age: number, gender: string, mob: number, acc: number) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.accNumber = acc;
        this.mobNumber = mob;
    }
}
// interface BankAccount
interface BankAccount {
    accNumber: number;
    balance: number;
}
// class Bank
class Bank {
    customer: Customer[] = [];
    account: BankAccount[] = [];

    addCustomer(obj: Customer) {
        this.customer.push(obj);
    }
    addAccountNumber(obj: BankAccount) {
        this.account.push(obj);
    }
    transcation(accObj: BankAccount) {
        let NewAccounts = this.account.filter((acc) => acc.accNumber !== accObj.accNumber);
        this.account = [...NewAccounts, accObj];
    }
}
Bank
let myBank = new Bank();
// customer Create
for (let i: number = 1; i <= 3; i++) {
    let fName = faker.person.firstName("male");
    let lName = faker.person.lastName();
    let num = parseInt(faker.phone.number("3#########"));
    const cus = new Customer(fName, lName, 25 * i, "male", num, 1000 + i);
    myBank.addAccountNumber({ accNumber: cus.accNumber, balance: 1000 * i })
    myBank.addCustomer(cus);

}

// Bank Functionality
async function bankService(bank: Bank) {
    do{

        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please Select the Service",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit"],
        });
    
        // view Balance
        if (service.select == "View Balance") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num)
            if (!account) {
    
                console.log(chalk.redBright.bold.italic("invailed user please enter the correct account number"));
            }
            if (account) {
                let name = myBank.customer.find((item) => item.accNumber == res.num);
                console.log("Dear ", chalk.green.bold.italic(name?.lastName), chalk.blue.bold.italic("your account balance is $", chalk.green.bold.italic(account.balance)));
    
            }
        }
        // Cash Withdraw
        if (service.select == "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num)
            if (!account) {
                console.log(chalk.redBright.bold.italic("invailed user please enter the correct account number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter your amount.",
                    name: "rupee",
                });
                if (ans.rupee > account.balance) {
                    console.log (chalk.red.bold("you have insufficient balance.."));
                }
                let newBalance = account.balance - ans.rupee;
                // trancsation method call

                bank.transcation({ accNumber: account.accNumber, balance: newBalance });
                
            }
    
        }
        // Cash Deposit
        if (service.select == "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num)
            if (!account) {
                console.log(chalk.redBright.bold.italic("invailed user please enter the correct account number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter your amount.",
                    name: "rupee",
                });
                let newBalance = account.balance + ans.rupee;
                // trancsation method call
                bank.transcation({ accNumber: account.accNumber, balance: newBalance });
            }
    
        }
    }while(true)
}
bankService(myBank);


