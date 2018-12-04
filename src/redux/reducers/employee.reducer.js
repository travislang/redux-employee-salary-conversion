const employeeList = (state = [], action) => {
    if (action.type === 'ADD_EMPLOYEE') {
        return [...state, action.payload]
    }
    else if (action.type === 'DELETE_EMPLOYEE') {
        const matchEmployee = employee => action.payload.idNumber !== employee.idNumber;
        return state.filter(matchEmployee)
    }
    return state;
}

export default employeeList;