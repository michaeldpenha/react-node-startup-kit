import React, { Component } from 'react';
import './employees.css';

class Employees extends Component {
    constructor(){
        super();
        this.state = {
            employees  : []
        }   
    }

    componentDidMount() {
        fetch('/api/employees')
         .then(res => res.json())
         .then(employees => this.setState({employees},() => {console.log('Employee Fetched',employees)}));
    }

    render() {
        return (
            <div>
                <h2>Employees</h2>
                <ul>
                    {this.state.employees.map(employee => <li>{employee.firstName} {employee.lastName}</li>)}
                </ul>
            </div>
        );
    }
}

export default Employees;
