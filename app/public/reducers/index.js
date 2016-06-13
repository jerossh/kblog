export const posts = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POSTS_SUCCESS':
            return { ...state, posts: action.payload };
        default:
            return state;
    }
}

