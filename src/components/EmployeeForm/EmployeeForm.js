import React, { Component } from 'react';

const emptyEmployeeObject = {
  firstName: '',
  lastName: '',
  idNumber: '',
  jobTitle: '',
  annualSalary: '',
};

class EmployeeForm extends Component {
  state = emptyEmployeeObject;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEmployee(this.state);
    this.clearEmployeeFields();
  }

  clearEmployeeFields = () => {
    this.setState(emptyEmployeeObject);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} placeholder="First Name" value={this.state.firstName} name="firstName" />
        <input onChange={this.handleChange} placeholder="Last Name" value={this.state.lastName} name="lastName" />
        <input onChange={this.handleChange} placeholder="ID Number" value={this.state.idNumber} name="idNumber" />
        <input onChange={this.handleChange} placeholder="Job Title" value={this.state.jobTitle} name="jobTitle" />
        <input onChange={this.handleChange} placeholder="Annual Salary" value={this.state.annualSalary} name="annualSalary" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EmployeeForm;
