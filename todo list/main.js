import inquirer from "inquirer";
let todos = [];
async function createtodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: 'select',
            message: 'select an operation',
            choices: ["add", "update", "view", "delete"]
        });
        if (ans.select == "add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "add your item..",
                name: "todo",
            });
            todos.push(addtodo.todo);
            console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "selcet item for update..",
                choices: todos.map(item => item),
            });
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Update your item..",
                name: "todo",
            });
            let newtodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newtodo, addtodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log(todos);
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "selcet item for delete..",
                choices: todos.map(item => item),
            });
            let newtodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newtodo];
            console.log(todos);
        }
    } while (true);
}
createtodo(todos);
