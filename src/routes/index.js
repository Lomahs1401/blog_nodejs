import newsRouter from './news.js';
import meRouter from './me.js';
import siteRouter from './site.js';
import courseRouter from './courses.js';

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

export default route;
