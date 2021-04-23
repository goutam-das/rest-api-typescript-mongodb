import "dotenv/config";
import Express from "express";
import mongoose from "mongoose";
import { SERVER_PORT, MONGO_URL, MONGO_OPTIONS } from "./config";
import bookRoutes from "./routes/book";

(async () => {
  try {
    await mongoose.connect(MONGO_URL, MONGO_OPTIONS);
    console.log("MongoDB connected!");
    const app = Express();
    app.use("/api/books", bookRoutes);
    app.get("/", (_, res) => {
      res.send("Hello");
    });
    app.listen(SERVER_PORT, () => {
      console.log(`Server listening on ${SERVER_PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
