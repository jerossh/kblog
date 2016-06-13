import koaRouter from 'koa-router';
import posts from '../api/posts';

export default (app) => {
    let router = koaRouter();
    app.use(router.routes());

    router.get('/', function *(next) {
        yield this.render('base.html', {});
        yield next;
    });

    router.get('/api/posts', posts);

    router.get('*', function *(next) {
        yield this.render('base.html', {});
        yield next;
    });
}

