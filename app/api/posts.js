import Post from '../models/post';

export default function *(next) {
    let cate = this.query.cate || null;

    yield Post.findByCate(cate).then((posts) => {
        return this.body = { posts };
    });
}

