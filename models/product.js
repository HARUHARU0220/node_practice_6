import mongoose from "mongoose";

const productSchema = moongoose.Schema(
    {
        name: {
            type : String,
            required : true
        },

        price: {
            type: Number,
            required : true
        },

        description : String,
        inSale: {
            type: Boolean,
            default: false
        },
        stock: {
            type: Number,
            default: 0
        }
    },

    {
        timestamps : ture
    }

)

const productModel = mongoose.model(`product`, productSchema)
export default productModel

