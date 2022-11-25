import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/posts", postRoutes);
const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, process.env.RESTREVIEWS_DB_URI, {
    useNewUrlParser: true,
    useUNifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port:${PORT} `))
  )
  .catch((error) => console.log(error.message));

// mongoose.set(useFindAndModify, false);
