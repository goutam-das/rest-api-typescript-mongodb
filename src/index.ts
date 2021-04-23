import "dotenv/config";
import Express from "express";
// import mongoose from "mongoose";

(async () => {
  try {
    const app = Express();
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
