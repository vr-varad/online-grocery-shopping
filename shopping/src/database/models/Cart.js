const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    customerId: { type: String },
    items: [
      {
        product: {
          _id: { type: String, required: true },
          name: { type: String },
          desc: { type: String },
          banner: { type: String },
          type: { type: String },
          price: { type: Number },
          unit: { type: Number },
          price: { type: String },
          suplier: { type: String },
        },
        unit: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret._v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", CartSchema);
