const mongoose = require("mongoose");

//Employees Schema
// Validations can also can be added in schema

let employeesSchema = mongoose.Schema({
    "first_name" : {
         type : String,
         required : [true,'Users First name is required']
    },
    "last_name" : {
        type : String,
        required :  [true,'Users Last name is required']
    },
    "age" : {
        type : Number,
        required : true
    },
    "sex" : {
        type : String,
        required : true
    },
    "designation" : {
        type : String
    },
    "date_of_birth" : {
        type : String,
        required : true
    },
    "current_project" : {
        type : String
    },
    "address" : {
        type : String,
        required : true
    },
    "reporting_manager" : {
        type : String
    },
    "primary_skills" :{
        type : Array
    },
    "secondary_skills" : {
        type : Array
    },
    "employee_id" : {
        type : String
    },
    "created_date" : {
        type : Date,
        default : Date.now()
    }
});

let EmployeesData = module.exports = mongoose.model('employees',employeesSchema);

// Get Employee Data
module.exports.getEmployeesData = (callback,limit) =>{
    EmployeesData.find(callback).limit(limit);
}

// Delete Employee Data
module.exports.deleteEmployeeData = (firstName,callback) =>{
    let query = {"first_name": firstName};
    EmployeesData.remove(query,callback);
}

// Add Employee
module.exports.addEmployeeData = (employee,callback) =>{
    EmployeesData.create(employee,callback);
}

//Update Employee
module.exports.updateEmployeeData = (id, employee, options, callback) =>{
    var query = {"employee_id" : id};
    var update = {
        "first_name": employee["first_name"],
        "last_name": employee["last_name"],
        "age": employee["age"],
        "sex": employee["sex"],
        "designation": employee["designation"],
        "date_of_birth": employee["date_of_birth"],
        "current_project": employee["current_project"],
        "address": employee["address"],
        "reporting_manager": employee["reporting_manager"],
        "employee_id": employee["employee_id"],
        "secondary_skills": employee["secondary_skills"],
        "primary_skills": employee["primary_skills"]
    }
    EmployeesData.findOneAndUpdate(query,update,options,callback);
}