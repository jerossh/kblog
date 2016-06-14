import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    url: String,
    name: String,
    index: Number,
});

CategorySchema.static('findByUrl', function(url) {
    return new Promise((resolve, reject) => {
        this.findOne({ url }, (err, cate) => {
            if (err) {
                reject(err);
            } else {
                resolve(cate);
            }
        });
    });
});

CategorySchema.static('findAll', function() {
    return new Promise((resolve, reject) => {
        this.find({}, (err, cates) => {
            if (err) {
                reject(err);
            } else {
                resolve(cates);
            }
        });
    });
});

export default mongoose.model('Category', CategorySchema);

