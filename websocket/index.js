// import { WebSocketServer } from "ws";

// const wss = new WebSocketServer({ port: 8080 });

// wss.on("connection", function connection(ws) {
//   ws.on("message", function message(data) {
//     console.log("received: %s", data);
//     //ws.send("Akash");
//   });
//   ws.send("Akash");
// });

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("New connection established");

  ws.on("message", function message(data) {
    console.log("received: %s", data);
    ws.send("Message received: " + data); // Acknowledge the message
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
  });

  ws.on("close", () => {
    console.log("Connection closed");
  });

  ws.send("Welcome to the server!");
});

wss.on("error", (err) => {
  console.error("WebSocket Server error:", err);
});
