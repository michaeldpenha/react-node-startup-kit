const express = require('express');
const app = express();

app.get('/api/employees', (req,res) => {
        const employees = [{
            "firstName" : "Michael",
            "lastName" : "Dpenha"
        },{
            "firstName" : "Sumeet",
            "lastName" : "Somnavane"
        },{
            "firstName" : "Rutuja",
            "lastName" : "Swami"
        },{
            "firstName" : "Mayur",
            "lastName" : "Patil"
        }];
        res.json(employees);
});

const port = 5000;

app.listen(port ,() => console.log(`Server started on ${port}`));