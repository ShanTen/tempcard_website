const express = require("express");
require("dotenv").config();

// sanity
const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(express.static("src"));
app.use(express.json());

app.get("/admin", (req, res) => {
  res.redirect("https://tempcard.sanity.studio");
});

// routes

app.post("/addSupport", (req, res) => {
  data = req.body;

  client
    .create({
      _type: "support",
      ...data,
      resolved: false,
    })
    .then((doc) => {
      console.log("Document Created at " + doc._id);
      res.send("Document Created at " + doc);
    });
});

app.post("/addEnquiry", (req, res) => {
  data = req.body;

  client
    .create({
      _type: "enquiry",
      ...data,
      resolved: false,
    })
    .then((doc) => {
      console.log("Document Created at " + doc._id);
      res.send("Document Created at " + doc);
    });
});
