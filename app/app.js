import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import staticServer from 'koa-static';
import mongoose from 'mongoose';
import nunjucks from './middlewares/nunjucks';
import routers from './routers';

const app = koa();

mongoose.connect('mongodb://localhost:27017/kblog');
mongoose.connection.on('error', console.error.bind(console, '连接数据库失败'));

app.use(staticServer(__dirname + '/public'));
app.use(nunjucks('app/views', {
    noCache: process.env.NODE_ENV === 'production',
    watch: !process.env.NODE_ENV === 'production'
}));
app.use(bodyParser());

routers(app);

app.listen(8989, '0.0.0.0');

