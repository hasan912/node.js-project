import inquirer from "inquirer";


async function calculate() {
    const answers = await inquirer.prompt([
        {
            type: 'listr',
            name: 'operator',
            massage: 'kindly select your operator:',
            choices: ["+", "-", "*", "/"]
        },
        {type:'number',
        name: 'num1',
        massage: 'Enter the first number:',
    },
    {type: 'number',
    name: 'num2',
    message: 'Enter the second number:',
    },
    ]);

    let result;

    switch (answers.operator) {
        case "+":
            result = answers.num1 + answers.num2;
            break;
        case "-":
            result = answers.num1 - answers.num2;
            break;
            case '*':
        result = answers.num1 * answers.num2;
        break;
      case '/':
        result = answers.num1 / answers.num2;
        break;
      default:
        console.log('Invalid operator');
        return;    
    }

    console.log("The result is:", result);
}

calculate();