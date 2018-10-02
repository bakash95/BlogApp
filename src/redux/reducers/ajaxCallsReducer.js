import initialState from '../store/InitialState';
import actionTypes from '../actionTypes/actionTypes';

const ajaxCallsReducer = (state = initialState.ajaxCalls, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_AJAX_START:
            return {
                ...state,
                getAllPosts: {
                    loading: true,
                    hasError: false,
                },
            };

        case actionTypes.GET_POSTS_AJAX_SUCCESS:
            return {
                ...state,
                getAllPosts: {
                    loading: false,
                    hasError: false,
                },
            };

        case actionTypes.GET_POSTS_AJAX_FAILURE:
            return {
                ...state,
                getAllPosts: {
                    loading: false,
                    hasError: true,
                },
            };

        case actionTypes.GET_AUTHORS_AJAX_START:
            return {
                ...state,
                getAllAuthors: {
                    loading: true,
                    hasError: false,
                },
            };

        case actionTypes.GET_AUTHORS_AJAX_SUCCESS:
            return {
                ...state,
                getAllAuthors: {
                    loading: false,
                    hasError: false,
                },
            };

        case actionTypes.GET_AUTHORS_AJAX_FAILURE:
            return {
                ...state,
                getAllAuthors: {
                    loading: false,
                    hasError: true,
                },
            };

        default:
            return state;
    }
}

export default ajaxCallsReducer;