const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
const Data = require('./model');
//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await Data(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code

app.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "An error occurred while fetching the data" });
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
