import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const Product = model('Product', productSchema);
export default Product;
