import koaRouter from 'koa-router';
import posts from '../api/posts';
import cates from '../api/category';

export default (app) => {
    let router = koaRouter();
    app.use(router.routes());

    router.get('/', function *(next) {
        yield this.render('base.html', {});
        yield next;
    });

    router.get('/api/posts', posts);
    router.get('/api/cates', cates);

    router.get('*', function *(next) {
        yield this.render('base.html', {});
        yield next;
    });
}

