const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/message", (req, res) => {
  // res.json({"message": "qualcosa"});
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  console.log("Trying to send...");
  
  const intervalId = setInterval(() => {
    const data = { message: "hello stupid time: "+ new Date().toISOString()};
    console.log("Data: " + data.message);
    res.write("data: " + JSON.stringify(data) + "\n\n");
  }, 1000);

  // When client closes connection, stop sending events
  req.on('close', () => {
      clearInterval(intervalId);
      res.end();
  });
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
