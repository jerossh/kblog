export const posts = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POSTS_SUCCESS':
            return { ...state, posts: action.payload, currentCate: action.currentCate };
        default:
            return state;
    }
};

export const cates = (state = {}, action) => {
    switch (action.type) {
        case 'GET_CATES_SUCCESS':
            return { ...state, cates: action.payload };
        default:
            return state;
    }
};

