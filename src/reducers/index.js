import { combineReducers } from 'redux';
import CheckboxReducer from './checkboxReducer'

import CLICK_CHECKBOX from './actionTypes';

const rootReducer = combineReducers({
	checkboxes: CheckboxReducer
})

export default rootReducer;