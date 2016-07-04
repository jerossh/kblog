import koaRouter from 'koa-router';
import { getPost, getPosts } from '../api/posts';
import cates from '../api/category';

export default (app) => {
    let router = koaRouter();
    app.use(router.routes());

    router.get('/', function *(next) {
        yield this.render('base.html', {});
        yield next;
    });

    router.get('/api/post/:postId', getPost);
    router.get('/api/posts', getPosts);
    router.get('/api/cates', cates);

    router.get('*', function *(next) {
        yield this.render('base.html', {});
        yield next;
    });
}

