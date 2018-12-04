import React from 'react';

const employeeSalary = (sum, employee) => sum + Number(employee.annualSalary);

const calculateMonthlyCost = employeeList => employeeList.reduce(employeeSalary, 0) / 12;

const EmployeeTotal = ({ employeeList }) => (
  <p>Total Monthly Cost: {calculateMonthlyCost(employeeList)}</p>
);

export default EmployeeTotal;
