import express from "express";

const app = new express();
const PORT = 8000;

app.get("/", (req, res, next) => {
  console.log("Hey my first web server");
  res.send("Hehey awesome");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server running at http://localhost:${PORT}`);
});
