const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);

// Serve static files from parent directory
app.use(express.static(path.join(__dirname, "..")));

// Serve index.html for root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 3001;
const users = {};

io.on("connection", (socket) => {
  console.log("✅ Socket connected:", socket.id);

  socket.on("new-user-joined", (name) => {
    users[socket.id] = name;
    console.log("👤 User joined:", name);

    socket.broadcast.emit("user-joined", name);
  });

  socket.on("send", (message) => {
    if (!users[socket.id]) {
      console.log("⚠️ Message sent before joining");
      return;
    }

    socket.broadcast.emit("receive", {
      message,
      name: users[socket.id],
    });
  });

  socket.on("disconnect", () => {
    const name = users[socket.id];
    if (name) {
      socket.broadcast.emit("left", name);
      delete users[socket.id];
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
