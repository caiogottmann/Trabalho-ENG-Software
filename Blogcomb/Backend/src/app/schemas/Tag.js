import mongoose from '@/database';

const emailSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
    unique: true,
  },
  posts: {
    type: Array,
    required: true,
  }
});

export default mongoose.model('tags', tagSchema);