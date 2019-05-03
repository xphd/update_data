"use strict";

const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const serverSocket = socketIO(server, { origins: "*:*" });

console.log("Server listening 9090");
server.listen(9090);

serverSocket.on("connection", socket => {
  console.log("Server: connected!");
  socket.on("requestData", () => {
    console.log("Server: responseData");
    let persons = [1, 2, 3, 4];
    socket.emit("responseData", persons);
  });
});

// serverSocket.on("requestData", socket => {
//   socket.emit("responseData");
// });
