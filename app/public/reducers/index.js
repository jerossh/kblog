// 获取文章详情
export const post = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POST_SUCCESS':
            return {
                ...state,
                post: action.post,
                currentCate: action.currentCate,
                timeStamp: Date.now(),
                status: action.status,
            };
        case 'GET_POST_ERROR':
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

// 获取文章列表
export const posts = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.posts,
                currentCate: action.currentCate,
                timeStamp: Date.now(),
                status: action.status
            };
        case 'GET_POSTS_ERROR':
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

// 获取所有分类
export const cates = (state = {}, action) => {
    switch (action.type) {
        case 'GET_CATES_SUCCESS':
            return {
                ...state,
                cates: action.payload
            };
        default:
            return state;
    }
};

