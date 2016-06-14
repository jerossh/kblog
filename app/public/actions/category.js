import fetch from 'isomorphic-fetch';

const requestCates = () => {
    return {
        type: 'REQUEST_CATES',
        loading: true,
    }
};

const getCatesSuccess = (cates) => {
    return {
        type: 'GET_CATES_SUCCESS',
        loading: false,
        payload: cates.cates,
    }
};

const getCatesError = () => {
    return {
        type: 'GET_CATES_ERROR',
        loading: false,
    }
};

export const getCates = () => {
    return dispatch => {
        dispatch(requestCates());

        return fetch('/api/cates')
            .then(response => response.json())
            .then(json => dispatch(getCatesSuccess(json)));
    }
};

