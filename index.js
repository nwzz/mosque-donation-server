import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// All Routes import
import { errorHandler, notFound } from "./middleware/error.js";
import connectMongoDB from "./config/db.js";
import paymentRoute from "./routes/payment.js";
import sliderPosterRoute from "./routes/sliderPoster.js";

dotenv.config();
connectMongoDB();

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// All route declear
app.get("/", (req, res) => {
  res.status(200).send({ message: "Server" });
});
app.use("/api", paymentRoute);
app.use("/api", sliderPosterRoute);

// Custom Error Handler
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
