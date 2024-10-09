import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const employeeSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  sales: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sale'
    }
  ]
});

const Employee = model('Employee', employeeSchema);
export default Employee;
