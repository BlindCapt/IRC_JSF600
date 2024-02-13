import "../css/chatBox.css";
import React, { useState, useEffect } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState(null);

  const getMessages = async () => {
    const res = await fetch(`/chat/getMessage/1`);
    const data = await res.json();

    if (res.ok) {
      data.reverse();
      setMessages(data);
    }
    console.log(data);
  };
  useEffect(() => {
    getMessages();
  }, []);

  const [message, setMessage] = useState("");
  const [idChannel] = useState("1");
  const [idUser] = useState("1");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const messageToSend = { message, idChannel, idUser };

    const response = await fetch("/chat/postMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageToSend),
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    } else {
      console.log("new message sent");
      setMessage("");
    }
    getMessages();
  };

  const setScrollBarToBottom = () => {
    var objDiv = document.getElementById("chatBox");
    try {
      objDiv.scrollTop = objDiv.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="chatBox" id="chatBox">
        {messages &&
          messages.map((message) => (
            <div key={message._id}>
              <p>{message.message}</p>
            </div>
          ))}
        {setScrollBarToBottom()}
      </div>
      <div>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
