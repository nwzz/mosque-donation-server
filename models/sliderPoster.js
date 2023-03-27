import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      min: 1000,
      integer: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SliderPoster = mongoose.model("SliderPoster", schema);

export default SliderPoster;
