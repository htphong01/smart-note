const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.plugin(require('mongoose-slug-generator'));

const pageSchema = new Schema({
  title: { type: String },
  image: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  slug: { type: String, slug: "title", unique: true },
}, {
  timestamps: true
});

pageSchema.plugin(require('mongoose-delete'), { deletedBy: true, deletedAt: true, overrideMethods: true })


module.exports = mongoose.model('Page', pageSchema);