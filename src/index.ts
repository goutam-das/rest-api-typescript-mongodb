import "dotenv/config";
import Express from "express";
// import mongoose from "mongoose";
import bookRoutes from "./routes/book";

(async () => {
  try {
    const app = Express();
    app.use("/api/books", bookRoutes);
    app.get("/", (_, res) => {
      res.send("Hello");
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
