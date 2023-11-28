import mongoose, { type Document } from 'mongoose';
import { IUser } from '@/bl/user/types';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },

  email: {
    type: String,
    required: [true, 'Please provide your email'],
    max: 100,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value: string) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        return validator.isEmail(value);
      },
      message: 'Please provide a valid email'
    }
  },
  avatar: { type: String }

  },
  {
    timestamps: true
  }
);

export default mongoose.model<IUser>('user', UserSchema);
