import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  id: String,
  invoiceId: [String],
});

export const User = mongoose.model('User', userSchema);
