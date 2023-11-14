/* eslint-disable no-undef */
const express = require("express");

const usersRoutes = require("./users/usersRoutes.js");

const server = express();

server.use("/api/users", usersRoutes);
server.use("/api/register", usersRoutes);

server.use("/", (req, res) => {
  res.status(200).send("API running");
});


const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost/api:${port} ***\n`);
});
