/* dependencies needed */
/* download & install mysql */
const mysql = require("mysql2"); 
const inquirer = require("inquirer");
const { createConnection } = require("mysql2");



/* connect db */
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_db",
},
console.log("Connected.")
);
db.connect(() => {
homeMenu();
});

/* prompt to run inquirer */
function menu(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "home",
                message: "What would you like to do?",
                choices: [
                    "Add Employees",
                    "View Employees",
                    "Update Employee Role",
                    "Add Department",
                    "View Departments",
                    "Add Roles",
                    "View Roles",
                    "Done"]
            }
        ])

        .then(function ({menu}) {
            switch (menu) {
                case "Add Employees":
                    addEmployees();
                    return;

                case "View Employees":
                    viewEmployees();
                    return;
                    
                case "Update Employee Role":
                    updateEmployeeRole();
                    return;
                case "Add Department":
                    addDepartment();
                    return;
                case "View Departments":
                    viewDepartments();
                    return;
                case "Add Roles":
                    addRoles();
                    return;
                case "View Roles":
                    viewRoles();
                    return;
                case "Done":
                    Connection.end();
            }
        })
}

/* employee code */
/* adding employees */
function addEmployees(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your first name?",
            name: "firstName",
        },
        {
            type: "input",
            message: "What is your last name?",
            name: "lastName",
        },
        {
            type: "input",
            message: "What is your role?",
            name: "roleId",
        },
        {
            type: "input",
            message: "What is your manager id?",
            name: "managerId",
        },
    ])
    .then(function(answers){
        console.info("Answers: ", answers);
        db.query("INSERT INTO employee (firstName, lastName, roleId, managerId) values (?, ?, ?, ?)", 
        [answers.firstName, answers.lastName, answers.roleId, answers.managerId],

        function (err) {
        if(err)throw err;
        console.log("Updated");
        menu();
        });
    });
}

/* view employee */
function viewEmployee(){
    db.query("Select * From role", function (err, res){
        if(err)throw err;
        console.log("Updated");
        menu();
    });
}

/* update an employee */
function updateEmployeeRole() {
    return inquirer
    .prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employee would you like to update?",
        },
        {
            type: "list", 
            name: "newRole",
            message: "What is their new role?",
        },
    ])
    .then(function (answer) {
        if(err, res) {
        } addRoles(answer);
        viewEmployee();
        addEmployees();
    })
};


/* department code */
/* adding departments */
function addDepartment() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What department are you in?",
            name: "department",
        },
    ])
    .then(function(answers) {
        console.info("Answers: ", answers);
        db.query("INSERT INTO Department (name) values (?)", [answers.department], 
        function (err, res){
        if(err)throw err;
        viewDepartments();
        menu();
        });
    });
}

/* view departments */
function viewDepartments(){
    db.query("Select * From department", function (err, res){
        if(err)throw err;
        console.log("Updated");
        menu();
    });
}


/* roles code */
/* adding roles */
function addRoles() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your title?",
            name: "title",
        },
        {
            type: "input",
            message: "What is your salary?",
            name: "salary",
        },
        {
            type: "input",
            message: "What is your department id?",
            name: "departmentId",
        },
    ])
    .then(function (answers) {
        console.info("Answers: ",answers);
        db.query("INSERT INTO role (title, salary, departmentId) values (?, ?, ?)",
        [answers.title, answers.salary, answers.departmentId],
        function (err, res) {
            if(err)throw err;
            viewRoles();
            menu();
        });
    })
}

/* view roles */
function viewRoles(){
    db.query("Select * From employee", function (err, res){
        if(err)throw err;
        console.log("Updated");
        menu();
    });
}

/* done */
function done() {
    return process.exit();
}
