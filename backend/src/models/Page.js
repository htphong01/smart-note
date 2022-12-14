const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema({
  title: { type: String },
  image: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.export = mongoose.model('Page', pageSchema);