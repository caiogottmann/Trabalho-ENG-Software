import mongoose from '@/database';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
  },
  Admin: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

UserSchema.pre('save', function (next) {
  this.role = 'user';
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  next();
});

export default mongoose.model('User', UserSchema);