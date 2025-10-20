const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => res.send("Hello from Heroku!"));
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

app.get("/message", (_req, res) => {
  const msg = process.env.MESSAGE || "No MESSAGE set";
  res.send(`MESSAGE: ${msg}`);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));