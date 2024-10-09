import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const saleSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  products: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    unitPrice: {
      type: Number,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Sale = model('Sale', saleSchema);
export default Sale;
