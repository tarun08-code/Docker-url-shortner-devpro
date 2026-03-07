const express = require("express");
const { createClient } = require("redis");
const shortid = require("shortid");

const app = express();
app.use(express.json());

const client = createClient({
  url: "redis://redis:6379"
});

client.connect();

app.post("/shorten", async (req, res) => {
  const { url } = req.body;

  const id = shortid.generate();

  await client.set(id, url);

  res.json({
    short: `http://localhost:3000/${id}`
  });
});

app.get("/:id", async (req, res) => {
  const url = await client.get(req.params.id);

  if (!url) {
    return res.status(404).send("Not found");
  }

  res.redirect(url);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});