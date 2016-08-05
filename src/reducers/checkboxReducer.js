import CLICK_CHECKBOX from '../actions/actionTypes';

export default function(state = {}, action) {

	switch(action.type) {
		case CLICK_CHECKBOX: 
			return { ...state, checkbox: action.payload }
		default:
			return state;
	}
}