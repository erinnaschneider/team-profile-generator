const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs');
const path = require('path');


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
    type: "input",
    name: "officeNum",
    message: "What is your office number?"
  }
])
    .then(({managerData}) => {
        const manager = new Manager(managerData);

        team.push(manager);

        menu();
    });
};

const menu = () => {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Do you want to add a new employee?"
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

createManager();