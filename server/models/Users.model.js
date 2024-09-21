import mongoose from "mongoose";
const productschema = new mongoose.Schema({
  name: {
    type: String,
  },
   email : {
    type :String,
   },
   password: {
   type : String
   }
}, { timestamps: true })

const User = mongoose.model("User", productschema)

export default User