import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
import drugReducer from './DrugReducer';
export default combineReducers({
    simpleReducer: simpleReducer,
    drugReducer: drugReducer
});