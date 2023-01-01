const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(express.static("src"));
app.use(express.json());

app.get("/admin", (req, res) => {
  res.redirect("https://tempcard.sanity.studio");
});
