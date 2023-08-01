console.log("SERWER WORKING");
import express from "express";
const PORT = 5501;
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  res.status(200).json("Serwer działa!!!");
});

app.listen(PORT, () => console.log("SERWER START ON PORT " + PORT));
