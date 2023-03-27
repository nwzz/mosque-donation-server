import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    mosjidName: {
      type: String,
      required: true,
    },
    referenceId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["SUCCESS", "CANCELLED"],
      default: "SUCCESS",
    },
    finalMessage: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    cardType: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
      default: new Date(),
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    contactNumber: {
      type: String,
      trim: true,
    },
    receipt: {
      type: String,
      enum: ["sent", "not sent"],
      default: "not sent",
    },

    items: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", schema);

export default Payment;
