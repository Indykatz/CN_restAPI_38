require("./db/connection"); // run db connection
const express = require("express"); // pull in express module
const userRouter = require("./user/routes"); // bring in all endpoint cnnected to userRouter
const app = express(); // create webserver to manipulate
const port = process.env.PORT || 5001; // store port

app.use(express.json()); // parses all request if they are JSON sends all responses as JSON

app.use(userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); // Listening on port 5001 or provided port on current location (localhost)
