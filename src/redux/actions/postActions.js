import actionTypes from "../actionTypes/actionTypes";
import apiCall from '../../services/apiCall';

export const getPosts = (posts) => {
    return {
        type: actionTypes.GET_POSTS,
        payload: { posts, }
    }
}
export const getAllPosts = () => {
    return (dispatch) => {
        dispatch(postsApiCallStart());
        apiCall('posts').then((data) => {
            dispatch(postsApiCallSuccess()); dispatch(getPosts(data));
        })
            .catch((error) => { dispatch(postsApiCallFailure()); });
    }
}

export const postsApiCallStart = () => {
    return {
        type: actionTypes.GET_POSTS_AJAX_START,
    }
}

export const postsApiCallSuccess = () => {
    return {
        type: actionTypes.GET_POSTS_AJAX_SUCCESS,
    }
}

export const postsApiCallFailure = () => {
    return {
        type: actionTypes.GET_POSTS_AJAX_FAILURE,
    }
}