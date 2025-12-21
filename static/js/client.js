const socket = io("http://localhost:3001");

// DOM
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");

const audio = new Audio("alert.mp3");

const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message", position);
  messageContainer.append(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;

  if (position === "left") audio.play();
};

// 🔥 IMPORTANT: join immediately after prompt
let name = prompt("Enter your name (5+ chars)");
name = name?.trim();

if (!name || name.length < 5) {
  alert("Name must be at least 5 characters");
  location.reload();
}

socket.emit("new-user-joined", name);

// EVENTS
socket.on("user-joined", (name) => {
  append(`${name} joined the chat`, "left");
});

socket.on("receive", (data) => {
  append(`${data.name}: ${data.message}`, "left");
});

socket.on("left", (name) => {
  append(`${name} left the chat`, "left");
});

// SEND MESSAGE
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (!message) return;

  append(`You: ${message}`, "right");
  socket.emit("send", message);
  messageInput.value = "";
});
