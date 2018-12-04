import React from 'react';
import { connect } from 'react-redux';

const employeeSalary = (sum, employee) => sum + Number(employee.annualSalary);

const calculateMonthlyCost = employeeList => employeeList.reduce(employeeSalary, 0) / 12;

const EmployeeTotal = (props) => (
    <p>Total Monthly Cost: {calculateMonthlyCost(props.reduxStore.employeeList)}</p>
);



const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(EmployeeTotal);
