import inquirer from 'inquirer';
async function Quiz() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'Question1',
            message: 'Q1. What is the capital city of Pakistan?',
            choices: ["Hyderabad", "Lahore", "Karachi", "Islamabad"]
        }, {
            type: 'list',
            name: 'Question2',
            message: 'Q2. Which mountain range is located in Pakistan and is home to some of the worlds highest peaks, including K2?',
            choices: ["Rocky Mountains", "Andes Mountains", "Himalayan Mountains", "Karakoram Mountains"]
        },
        {
            type: 'list',
            name: 'Question3',
            message: 'Q3. Which river is the longest in Pakistan?',
            choices: ["Indus River", "Jhelum River", "Chenab River", " Ravi River"]
        },
        {
            type: 'list',
            name: 'Question4',
            message: 'Q4. Who is the founder of Pakistan?',
            choices: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam Muhammad Ali Jinnah", "Benazir Bhutto"]
        },
        {
            type: 'list',
            name: 'Question5',
            message: 'Q5. Pakistan shares its eastern border with which country?',
            choices: ["Afghanistan", "China", "India", "Iran"]
        },
        {
            type: 'list',
            name: 'Question6',
            message: 'Q6. What is the national language of Pakistan?',
            choices: ["Sindhi", "Urdu", "Punjabi", "Pashto"]
        },
        {
            type: 'list',
            name: 'Question7',
            message: 'Q7. Which famous archaeological site in Pakistan dates back to the Indus Valley Civilization and is a UNESCO World Heritage site?',
            choices: ["Mohenjo-Daro", "Taxila", "Harappa", "Lahore Fort"]
        },
        {
            type: 'list',
            name: 'Question8',
            message: 'Q8. Pakistan became an independent nation on what date?',
            choices: ["August 14, 1947", "August 15, 1947", "July 4, 1947", "June 3, 1947"]
        },
        {
            type: 'list',
            name: 'Question9',
            message: 'Q9. Who is Pakistans current Prime Minister in September 2023?',
            choices: ["Nawaz Sharif", "Anwar ul Haq Kakar", "Asif Ali Zardari", "Benazir Bhutto"]
        },
        {
            type: 'list',
            name: 'Question10',
            message: 'Q10. What is the highest civilian award in Pakistan, often given for outstanding contributions to the country?',
            choices: ["Nishan-e-Pakistan", "Sitara-e-Imtiaz", "Hilal-e-Imtiaz", "Tamgha-e-Shujaat"]
        },
    ]);
    const option1 = answers.Question1;
    const option2 = answers.Question2;
    const option3 = answers.Question3;
    const option4 = answers.Question4;
    const option5 = answers.Question5;
    const option6 = answers.Question6;
    const option7 = answers.Question7;
    const option8 = answers.Question8;
    const option9 = answers.Question9;
    const option10 = answers.Question10;
    if (option1 === "Islamabad") {
        console.log("Q1. Correct answer");
    }
    else {
        console.log("Wrong answer. Q1 The correct answer is Islamabad.");
    }
    if (option2 === "Karakoram Mountains") {
        console.log("Q2. Correct answer");
    }
    else {
        console.log("Wrong answer. Q2. The correct answer is Karakoram Mountains.");
    }
    if (option3 === " Indus River") {
        console.log("Q3. Correct answer");
    }
    else {
        console.log("Wrong answer. Q3. The correct answer is  Indus River.");
    }
    if (option4 === "Quaid-e-Azam Muhammad Ali Jinnah") {
        console.log("Q4. Correct answer");
    }
    else {
        console.log("Wrong answer. Q4. The correct answer is Quaid-e-Azam Muhammad Ali Jinnah.");
    }
    if (option5 === "India") {
        console.log("Q5. Correct answer");
    }
    else {
        console.log("Wrong answer. Q5. The correct answer is India.");
    }
    if (option6 === "Urdu") {
        console.log("Q6. Correct answer");
    }
    else {
        console.log("Wrong answer. Q6. The correct answer is Urdu.");
    }
    if (option7 === "Mohenjo-Daro") {
        console.log("Q7. Correct answer");
    }
    else {
        console.log("Wrong answer. Q7. The correct answer is Mohenjo-Daro.");
    }
    if (option8 === "August 14, 1947") {
        console.log("Q8. Correct answer");
    }
    else {
        console.log("Wrong answer. Q8. The correct answer is August 14, 1947.");
    }
    if (option9 === "Anwar ul Haq Kakar") {
        console.log("Q9. Correct answer");
    }
    else {
        console.log("Wrong answer. Q9. The correct answer is Anwar ul Haq Kakar.");
    }
    if (option10 === "Tamgha-e-Shujaat") {
        console.log("Q10. Correct answer");
    }
    else {
        console.log("Wrong answer. Q10. The correct answer is Tamgha-e-Shujaat.");
    }
}
Quiz();
