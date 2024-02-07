import { useState } from "react";

const ChatInput = () => {
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
  };

  return (
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
  );
};
export default ChatInput;
