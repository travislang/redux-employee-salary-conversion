import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <h2>Add Employee</h2>
          <EmployeeForm />
        </section>
        <section>
          <h2>Employees</h2>
          <EmployeeList employeeList={this.props.reduxStore.employeeList}/>
            <EmployeeTotal employeeList={this.props.reduxStore.employeeList}/>
        </section>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(App);
