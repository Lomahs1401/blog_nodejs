import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";
import slug from "mongoose-slug-updater";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, maxLength: 255, required: true },
  description: { type: String },
  image: { type: String, maxLength: 255 },
  videoId: { type: String, maxLength: 255 },
  level: { type: String, maxLength: 255 },
  slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true,
});

// Add plugins
mongoose.plugin(slug)
Course.plugin(MongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all' 
})

const CourseModel = mongoose.model('Course', Course);

export default CourseModel;