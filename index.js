import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5501;
const DB_URL = `mongodb+srv://yarovoytaras:Wypo67Opcb8@cluster0.zq1aqiu.mongodb.net/?retryWrites=true&w=majority`;
const app = express();
app.use(express.json());
app.use("/api", router);
app.use(fileUpload({}));
// app.use("/users", userRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERWER START ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}
startApp();
