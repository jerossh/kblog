import axios from 'axios';

const requestPost = () => {
    return {
        type: 'REQUEST_POST',
        status: 200,
    };
};

const getPostSuccess = (post) => {
    return {
        type: 'GET_POST_SUCCESS',
        post: post.post,
        currentCate: post.currentCate.url,
        status: 200,
    };
};

const getPostError = () => {
    return {
        type: 'GET_POST_ERROR',
        status: 404,
    };
};

export const getPost = (id) => {
    return dispatch => {
        dispatch(requestPost());

        return axios.get(`/api/post/${id}`)
            .then(response => dispatch(getPostSuccess(response.data)))
            .catch(error => dispatch(getPostError()));
    };
};

