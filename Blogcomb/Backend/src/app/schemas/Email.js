import mongoose from '@/database';

const emailSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
});

export default mongoose.model('emails', emailSchema);
