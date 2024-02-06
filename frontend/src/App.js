import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Change the URL to match your server

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages([...messages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
