const EmployeesData = require("./models/employeesData");

module.exports = function(app) {

    app.get('/',(req,res) =>{
        res.send('Hello World')
    });
    //Get Employees Data
    app.get('/api/employees',(req,res) => {
        EmployeesData.getEmployeesData((err,employees)=>{
            if(err){
                console.error(err);
            }
            res.json(employees);
        });
    });

    //delete Employee Data
    app.delete('/api/employee/:firstName',(req,res) =>{
        let firstName  = req.params.firstName;
        EmployeesData.deleteEmployeeData(firstName,(err,employee)=>{
            if(err){
                console.error(err);
            }
            res.json(employee);
        });
    });

    //add Employees Data
    app.post('/api/employee',(req,res) =>{
        var employee = req.body;
        EmployeesData.addEmployeeData(employee,(err,employee)=>{
            if(err){
                res.json(err);
            }
            res.json(employee);
        });
    });

    // Update Employee Data
    app.put('/api/employee/:id',(req,res) =>{
        var id = req.params.id;
        var employee = req.body;
        EmployeesData.updateEmployeeData(id,employee,{},(err,employee)=>{
            if(err){
                res.json(err);
            }
            res.json(employee);
        });
    });
};