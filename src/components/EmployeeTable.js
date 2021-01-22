import React, { Component } from 'react';
import API from '../utils/API';

class EmployeeTable extends Component {
    state = {
        employees: [],
        search: '',
        filteredEmployees: []
    }

    componentDidMount() {
        API.getEmployeeList()
            .then(res => {
                console.log(res.data.results);
                this.setState(
                    { employees: res.data.results, filteredEmployees: res.data.results }
                )
            })
            .catch(err => console.log(err));
    }

    render() {

        const employeeList = this.state.filteredEmployees.map((employee, i) => {
            return (
                <tr>
                    <td><img src={employee.picture.thumbnail} alt={employee.name.first}></img></td>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dob.age}</td>
                    <td>{employee.location.city}, {employee.location.state}</td>
                </tr>
            )
        })

        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Image</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList}
                </tbody>
            </table>
        )
    }
}

export default EmployeeTable;