import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/data.js";

dotenv.config();

const { DB_HOST, PORT = 3001 } = process.env;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DB launched"))
  .then(() =>
    app.listen(3001, console.log(`Server has been started on port ${PORT}...`))
  )
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
