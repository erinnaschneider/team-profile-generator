const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs');
const path = require('path');
const generatePage = require('./src/generatePage')


// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
const team = [];

const createManager = () => {
 return inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
    validate: value => {
        if (value) {
            return true;
        } else {
            console.log("Please enter your name!");
            return false
        }
    }
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee ID?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "number",
    name: "officeNum",
    message: "What is your office number?"
  }
])
    .then(({name, id, email, officeNum}) => {
        const mgr = new Manager(name, id, email, officeNum);

        team.push(mgr);

        menu();
    });
};

const menu = () => {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Would you like to add a new employee?"
        }
    )
    .then (answer => {
        if (answer.addEmployee) {
            console.log('New employee added!')
            newEmployee();
        } else {
            console.log('Generating team profile...')
        createTeam();
    }
    })
};

const newEmployee = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: "What type of employee would you like to add?",
            choices: ['Engineer', 'Intern', 'Exit']
        }
    )
    .then (response => {
        if (response.employeeType === 'Engineer') {
            createEngineer();
        } 
        else if(response.employeeType === 'Intern') {
            createIntern();
        } else {
            menu();
        }
    });
};

const createEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: "What is the engineer's name?", 
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false
                }
            }
        }, 
        {
            type: 'input', 
            name: 'id',
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'input', 
            name: 'email',
            message: "What is the engineer's email address?"
        }, 
        {
            type: 'input', 
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(({name, id, email, github}) => {
     
        const eng = new Engineer(name, id, email, github);
       
        team.push(eng);
  
        menu();
    });
};

const createIntern = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: "What is the intern's name?", 
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false
                }
            }
        }, 
        {
            type: 'input', 
            name: 'id',
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input', 
            name: 'email',
            message: "What is the intern's email address?"
        }, 
        {
            type: 'input', 
            name: 'school',
            message: "What school does the intern attend?"
        }
    ])
    .then(({name, id, email, school}) => {

        const int = new Intern(name, id, email, school);
     
        team.push(int);
 
        menu();
    });
}; 

const createTeam = () => {
    console.log("Success! New team created.");
    const teamProfile = generatePage(team);
    //write team data to index.html file
    fs.writeFile('./dist/index.html', teamProfile, err => {
        if(err) {
            console.log(err);
            return;
        }
    })
};

createManager();