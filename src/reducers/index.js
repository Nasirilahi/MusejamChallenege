import { combineReducers } from 'redux';
import projectListReducer from './projectListReducer';
import sortReducer from './sortReducer';

const rootReducer = combineReducers({
    projectList:projectListReducer,
    sortBy: sortReducer,
});

export default rootReducer;
