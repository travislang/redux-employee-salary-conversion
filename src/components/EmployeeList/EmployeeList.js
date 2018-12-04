import React from 'react';
import { connect } from 'react-redux';

const EmployeeList = (props) => (
    <ul>
        {props.reduxStore.employeeList.map(employee => (
            <li key={employee.idNumber}>
                {`${employee.firstName}
        ${employee.lastName}
        is the ${employee.jobTitle}
        and makes ${employee.annualSalary}`}
                <button onClick={() => props.dispatch({
                    type: 'DELETE_EMPLOYEE',
                    payload: employee
                })}>
                    Delete
        </button>
            </li>
        ))}
    </ul>
);

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(EmployeeList);
