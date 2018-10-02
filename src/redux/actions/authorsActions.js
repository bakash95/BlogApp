import actionTypes from "../actionTypes/actionTypes";
import apiCall from '../../services/apiCall';

export const getAuthors = (authors) => {
    return {
        type: actionTypes.GET_AUTHORS,
        payload: { authors, }
    }
}

export const getAllAuthors = () => {
    return (dispatch) => {
        dispatch(authorsApiCallStart());
        apiCall('authors').then((data) => {
            dispatch(authorsApiCallSuccess()); dispatch(getAuthors(data));
        }).catch((error) => { dispatch(authorsApiCallFailure()); });
    }
}

export const authorsApiCallStart = () => {
    return {
        type: actionTypes.GET_AUTHORS_AJAX_START,
    }
}

export const authorsApiCallSuccess = () => {
    return {
        type: actionTypes.GET_AUTHORS_AJAX_SUCCESS,
    }
}

export const authorsApiCallFailure = () => {
    return {
        type: actionTypes.GET_AUTHORS_AJAX_FAILURE,
    }
}