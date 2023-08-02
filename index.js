console.log("SERWER WORKING");
import express from "express";
import mongoose from "mongoose";

const PORT = 5501;
const DB_URL = `mongodb+srv://yarovoytaras:Wypoo67Opcb8@cluster0.zq1aqiu.mongodb.net/?retryWrites=true&w=majority`;
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  res.status(200).json("Serwer działa!!!");
});
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
