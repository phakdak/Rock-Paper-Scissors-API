const express = require("express");
const path = require("path");

const app = express();
const gamesRouter = require("./routes/rps");

app.use(express.json());

app.use("/api/games", gamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
