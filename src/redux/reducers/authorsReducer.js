import initialState from '../store/InitialState';
import actionTypes from '../actionTypes/actionTypes';

const authorsReducer = (state = initialState.authors, action) => {
    switch (action.type) {
        case actionTypes.GET_AUTHORS:
            return action.payload.authors;
        default:
            return state;
    }
}

export default authorsReducer;