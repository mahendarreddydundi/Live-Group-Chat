<<<<<<< HEAD
# GE Chat App

A real-time group chat application built with Node.js, Express, and Socket.IO. Chat with multiple users in real-time with instant message delivery.

## Features

- ✅ Real-time messaging
- ✅ Multiple users support
- ✅ User join/leave notifications
- ✅ Sound notifications for new messages
- ✅ Clean and modern UI
- ✅ Responsive design

## Technologies Used

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Frontend**: HTML, CSS, JavaScript
- **Server**: HTTP Server

## Installation

1. Clone the repository or download the project files

2. Navigate to the server directory:
   ```bash
   cd server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## How to Run

1. Start the server:
   ```bash
   cd server
   node index.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3001
   ```

3. Enter your name (minimum 5 characters) when prompted

4. Start chatting!

## Usage

- Enter your name when prompted (must be at least 5 characters)
- Type messages in the input field and click "Send" or press Enter
- See real-time updates when other users join, leave, or send messages
- Open multiple browser tabs/windows to test with multiple users

## Project Structure

```
Live-Group-Chat-main/
├── index.html          # Main HTML file
├── alert.mp3           # Notification sound
├── server/
│   ├── index.js        # Server-side code
│   ├── package.json    # Dependencies
│   └── node_modules/   # Installed packages
└── static/
    ├── css/
    │   └── style.css   # Stylesheet
    ├── js/
    │   └── client.js   # Client-side JavaScript
    └── [images/icons]  # Static assets
```

## Server Configuration

- **Port**: 3001
- **CORS**: Enabled for all origins (configurable in `server/index.js`)

