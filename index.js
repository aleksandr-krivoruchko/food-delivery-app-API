import express from "express";
import path from "path";
import routes from "./routes/products.js";

const __dirname = path.resolve();

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "static")));
app.use(express.json());
app.use(routes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3001, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
