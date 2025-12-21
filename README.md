..
💬 GE Chat App

GE Chat App is a real-time web chat application built using Node.js, Express, and Socket.IO.
It allows multiple users to join the chat and exchange messages instantly using WebSockets.

🚀 Features

Real-time messaging using Socket.IO

Multiple users can join simultaneously

Join / leave notifications

Simple and clean user interface

Fast message delivery using WebSockets

🛠 Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Real-time Communication: Socket.IO

📁 Project Structure
Live-Group-Chat-main
│
├── server
│   ├── index.js
│   ├── package.json
│   ├── node_modules
│
├── static
│   ├── css
│   ├── js
│   ├── images
│
├── index.html
└── README.md

⚙️ Prerequisites

Make sure you have the following installed:

Node.js (LTS version)

VS Code

Live Server extension in VS Code

▶️ How to Run the Server

Open the project in VS Code

Navigate to the server folder

Open the terminal in this folder

Run the following command:

node index.js


If the server starts successfully, you will see:

Server running on port 3001


✅ This confirms the backend server is running.

▶️ How to Run the Client

Go back to the project root folder

Locate the index.html file

Right-click on index.html

Select Open with Live Server

The application will open automatically in your browser.

🧪 How to Test the Application

Open the app in two different browsers

Example: Chrome & Edge

Or Normal window & Incognito window

Enter different usernames

Send messages between users

✅ Messages are delivered instantly in real time.

📌 Notes

Make sure the server is running before opening the client

Use different browsers for proper real-time testing

Socket.IO uses WebSockets for fast communication
