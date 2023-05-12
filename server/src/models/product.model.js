import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true,
        index: {
            unique: false
        }
    },
    type:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
        
    },
    price:{
        type:Number,
        require:true,
        default:0,

    },
    countInStock:{
        type:Number,
        required:true,
        default:0,
    },
},{
    timestamps:true
})
const productModel = mongoose.model("product",productSchema)
export default productModel