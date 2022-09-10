const inquirer = require ("inquirer");

const Manager = require ("./lib/Manager");
const Intern = require ("./lib/Intern");
const Engineer = require ("./lib/Engineer");

const team = []

function mainMenu () {
    inquirer.prompt({
        type: 'list',
        message: 'What type of employee you want to create.',
        name: 'type',
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "None, I want to start building the team"
        ]
    }) .then(answers => {
        if (answers.type === "Manager"){
            askManager()
        }
        if (answers.type === "Engineer"){
            askEngineer()
        }
        if (answers.type === "Intern"){
            askIntern()
        }
        if (answers.type === "None"){
            createHtml()
            // create HTML page (render html page)
        }
    })
}
function askManager (){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Please enter your name.',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Please enter your ID.',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Please enter your email.',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please enter your office number.',
                name: 'officeNumber',
                
            },
    
        ])
        .then(answers => {
            const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
            team.push(manager)
            mainMenu()
        })

}

function askIntern (){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Please enter your name.',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Please enter your ID.',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Please enter your email.',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please enter your school.',
                name: 'school',
                
            },
    
        ])
        .then(answers => {
            const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
            team.push(intern)
            mainMenu()
        })

};

function askEngineer (){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Please enter your name.',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Please enter your ID.',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Please enter your email.',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please enter your GitHub.',
                name: 'github',
                
            },
    
        ])
        .then(answers => {
            const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
            team.push(engineer)
            mainMenu()
        })

        function createHtml (){

        }

}

mainMenu()