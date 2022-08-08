const inquirer = require("inquirer");
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const fs = require("")
let empArray = [];
const empQuestions = [
    {
        type: "number",
        name: "id",
        message: "What is the employee ID?"
    },
    {
        type: "input",
        name: "empName",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the new employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    },
];
const manQuestion = [
    {
        type: "number",
        name: "officeNum",
        message: "What is their office number?"
    },
];
const engiQuestion = [
    {
        type: "input",
        name: "gitHub",
        message: "What is their GitHub username?"
    },
];
const internQuestion = [
    {
        type: "input",
        name: "school",
        message: "What school do the Attend?"
    },
];

function promptEmp() {
    inquirer.prompt(empQuestions).then((answer) => {
        if (answer.role === "Manager") {
            inquirer.prompt(manQuestion).then(data => {
                const manager = new Manager(answer.empName, answer.id, answer.email, data.officeNum)
                console.log(manager);
                empArray.push(manager);
                empContinue();
            })
        }else if(answer.role === "Engineer"){
            inquirer.prompt(engiQuestion).then(data => {
                const engineer = new Engineer(answer.empName, answer.id, answer.email, data.gitHub)
                console.log(engineer);
                empArray.push(engineer);
                empContinue();
            })
        }else{
            inquirer.prompt(internQuestion).then(data => {
                const intern = new Intern(answer.empName, answer.id, answer.email, data.school)
                console.log(intern);
                empArray.push(intern);
                empContinue();
            })
        }
    })
}
function empContinue(){
    inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: "Would you like to add another employee?"
    }).then((answer) => {
        if(answer.continue){
            promptEmp();
        }else{
            process.exit();
        }
    })
}
promptEmp();