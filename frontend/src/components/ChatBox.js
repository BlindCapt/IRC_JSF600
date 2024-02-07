import { useEffect, useState } from "react";
import "../css/chatBox.css";

const ChatBox = ({ channelId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch(`/chat/getMessage/${channelId}`);
      const data = await res.json();

      if (res.ok) {
        setMessages(data);
      }
      console.log(data);
    };

    getMessages();
  }, [channelId]);

  return (
    <div>
      <div className="chatBox">
        {messages &&
          messages.map((message) => (
            <div key={message._id}>
              <p>{message.message}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatBox;
