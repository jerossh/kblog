import Category from '../models/category';

export default function *(next) {
    yield Category.findAll().then(cates => {
        return this.body = {
            cates,
        };
    });
}

