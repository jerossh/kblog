import Category from '../models/category';
import Post from '../models/post';

export default function *(next) {
    let currentCate;
    let cate = this.query.cate || null;

    yield Category.findByUrl(cate).then(cate => {
        currentCate = cate && cate.url || 'index';
        return Post.findByCate(cate);
    }).then(posts => {
        return this.body = {
            currentCate,
            posts,
        };
    });
}

