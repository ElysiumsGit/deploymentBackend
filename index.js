import express from "express";

const app = express();

// ✅ Use the port provided by Render, or default to 3000 (for local dev)
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Everyone!");
});

app.get("/HelloDaddy", (req, res) => {
  res.send("Hello, daddy!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
