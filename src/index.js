import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const employeeList = (state = [], action) => {
    if(action.type === 'ADD_EMPLOYEE') {
        return [...state, action.payload]
    }
    else if (action.type === 'DELETE_EMPLOYEE') {
        const matchEmployee = employee => action.payload.idNumber !== action.payload.idNumber;
        return state.filter(matchEmployee)
    }
    return state
}
const storeInstance = createStore(
    combineReducers({ employeeList }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
