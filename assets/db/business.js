const inquirer = require("inquirer");
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
let empNum = 1;
const empQuestions = [
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
];
const roleQuestion = [
    {
        type: "list",
        name: "role",
        message: "What is the new employee's role?",
        choices:["Manager", "Engineer", "Intern"]
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



function roleQuestions(employeeObj){
    empNum++;
    inquirer.prompt(roleQuestion).then(answer =>{
        console.log(answer.role);
        if(answer.role === "Manager"){
            managerQuestions(employeeObj, answer.role);
        }else if(answer.role === "Intern")
    })
}

function managerQuestions(employeeObj, role){
    inquirer.prompt(manQuestion).then(roleAns =>{
        // employeeQuestions(role);
        let manager = new Manager (employeeObj.emp, role, employeeObj.id, employeeObj.email, roleAns.officeNum)
        console.log(manager);
        
     }
        )
}

function engineerQuestions(employeeObj, role){
    inquirer.prompt(engiQuestion).then(roleAns =>{
        // employeeQuestions(role);
        let engineer = new Engineer (employeeObj.emp, role, employeeObj.id, employeeObj.email, roleAns.gitHub)
        console.log(engineer);
        
     }
        )
}

function internQuestions(employeeObj, role){
    inquirer.prompt(internQuestion).then(roleAns =>{
        // employeeQuestions(role);
        let intern = new Intern (employeeObj.emp, role, employeeObj.id, employeeObj.email, roleAns.school)
        console.log(intern);
        
     }
        )
}

function employeeQuestions(role){
inquirer.prompt(empQuestions).then(answers => {
    let employee = new Employee (answers.empName, role, empNum, answers.email);
    console.log(employee);
    roleQuestions(employee);
    });
};

// roleQuestions();
employeeQuestions();





// function employeeQuestions(role){
//     inquirer.prompt(empQuestions).then(answers => {
//         let employee = new Employee (answers.empName, role, empNum, answers.email);
//         console.log(employee);
//         return employee;
//         });
//     };