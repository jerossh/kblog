import axios from 'axios';

const requestPosts = () => {
    return {
        type: 'REQUEST_POSTS',
        status: 200,
    };
};

const getPostsSuccess = (posts) => {
    return {
        type: 'GET_POSTS_SUCCESS',
        posts: posts.posts,
        currentCate: posts.currentCate,
        status: 200,
    };
};

const getPostsError = () => {
    return {
        type: 'GET_POSTS_ERROR',
        status: 404,
    };
};

export const getPosts = (cate) => {
    return dispatch => {
        dispatch(requestPosts());

        return axios.get(`/api/posts?cate=${cate}`)
            .then(response => dispatch(getPostsSuccess(response.data)))
            .catch((error) => dispatch(getPostsError()));
    };
};

