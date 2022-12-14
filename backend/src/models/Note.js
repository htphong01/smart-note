const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  content: { type: String },
  page: { type: Schema.Types.ObjectId, ref: 'Page' }
});

module.export = mongoose.model('Note', noteSchema);