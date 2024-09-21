import mongoose from "mongoose";
const productschema = new mongoose.Schema({
  name : {
    type  :String,

  },
  price : {
    type : Number
  }
},{timestamps: true})

const Product = mongoose.model("Product" ,productschema)

export default Product