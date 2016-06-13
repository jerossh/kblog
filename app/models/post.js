import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: Number,
    title: String,
    content: String,
    category: { name: String, url: String },
    tags: { type: Array, default: [] },
    views: { type: Number, default: 0 },
    createAt: { type: Date, default: Date.now },
});

PostSchema.static('findByCate', function(cate) {
    let current_cate = cate ? { category: { name: cate.name, url: cate.url } } : {};

    return new Promise((resolve, reject) => {
        this.find(current_cate)
        .sort({ createAt: -1 })
        .exec((err, posts) => {
            if (err) {
                reject(err);
            } else {
                resolve(posts);
            }
        });
    });
});

PostSchema.static('findById', function(id) {
    return new Promise((resolve, reject) => {
        this.findOne({ id }, (err, post) => {
            if (err || !post) {
                reject(err);
            } else {
                resolve(post);
            }
        });
    });
});

export default mongoose.model('Post', PostSchema);

