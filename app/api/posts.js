import Category from '../models/category';
import Post from '../models/post';

export const getPost = function *(next) {
    let post;
    let postId = this.params.postId;

    yield Post.findById(postId).then(p => {
        post = p;
        return Category.findByUrl(post.category.url);
    }).then(cate => {
        return this.body = {
            currentCate: cate,
            post,
        };
    });
}

export const getPosts = function *(next) {
    let statusCode;
    let currentCate;
    let c = this.query.cate;

    yield Category.findByUrl(c).then(cate => {
        statusCode = 200;

        if (cate) {
            currentCate = cate.url;
        } else if (c === 'index' || c === 'undefined') {
            currentCate = 'index';
        } else {
            statusCode = 404;
        }

        return Post.findByCate(cate);
    }).then(posts => {
        this.status = statusCode;
        if (statusCode == 404) {
            return this.body = '';
        }

        return this.body = {
            currentCate,
            posts,
        };
    });
}

