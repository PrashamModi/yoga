const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const User = require("./models/User");
const port = 4000;

require("./db/connection");

app.post("/", async (req, res) => {
  try {
    let user = new User(req.body);
    const result = await user.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
