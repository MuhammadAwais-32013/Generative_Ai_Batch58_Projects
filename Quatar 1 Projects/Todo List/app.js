#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Todos = [];
let choice = true;
let main = async () => {
    while (choice) {
        let options = await inquirer.prompt([
            {
                name: 'option',
                type: 'list',
                choices: ['Add Task', 'Delete Task', 'Update Task', 'View Task', 'Exist'],
                message: '=========Chose Your Desire Action================='
            }
        ]);
        if (options.option === 'Add Task') {
            await addTask();
        }
        else if (options.option === 'Delete Task') {
            await deleteTask();
        }
        else if (options.option === 'Update Task') {
            await updateTask();
        }
        else if (options.option === 'View Task') {
            await viewTask();
        }
        else if (options.option === 'Exist') {
            await exist();
        }
        else {
            console.log("Invallid Try Again");
        }
    }
};
// Add Task Function
let addTask = async () => {
    let addTodos = await inquirer.prompt([
        {
            name: 'add',
            type: 'input',
            message: 'Enter a Tasks in Todos \n'
        }
    ]);
    Todos.push(addTodos.add);
    console.log(chalk.magentaBright(`${addTodos.add} is Added Successfully into Todos`));
};
// delete Task Function
let deleteTask = async () => {
    await viewTask();
    let deleteTodos = await inquirer.prompt([
        {
            name: 'delete',
            type: 'input',
            message: 'Enter "index No of  Tasks" to delete \n'
        }
    ]);
    let deleteIndex = deleteTodos.delete;
    let deletTask = Todos.splice(deleteIndex - 1, 1);
    console.log(chalk.magentaBright(`${deletTask} is Deleted Successfully from Todos check the update from **View Task** `));
};
//================== Update Task Function
let updateTask = async () => {
    await viewTask();
    let updateTodos = await inquirer.prompt([
        {
            name: 'update',
            type: 'input',
            message: 'Enter "index No of  Tasks" to update \n'
        },
        {
            name: 'newTask',
            type: 'input',
            message: 'Enter "new Tasks" to update \n'
        }
    ]);
    let updateindex = updateTodos.update;
    Todos[updateindex - 1] = updateTodos.newTask;
    console.log(chalk.magentaBright(`Todos is Updated " check the update from **View Task** `));
};
// ======================View Task Function
let viewTask = async () => {
    console.log(chalk.cyanBright('Your Todos is below'));
    Todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// =======================Exist Function
// Add Task Function
let exist = async () => {
    choice = false;
};
main();
