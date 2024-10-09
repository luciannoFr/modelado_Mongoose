import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  isActive: {
    type: Boolean,
    default: true
  },
  phone: {
    type: Number
  },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String }
  },
  purchases: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sale'
    }
  ]
});

const Customer = model('Customer', customerSchema);
export default Customer;
