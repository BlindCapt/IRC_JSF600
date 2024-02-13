import { useState } from "react";
import { useMessagesContext } from "../hooks/useMessagesContext";

const MessageForm = () => {
  const { dispatch } = useMessagesContext();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageData = { message, idUser: 1, idChannel: 1 };
    const response = await fetch("/chat/postMessage", {
      method: "POST",
      body: JSON.stringify(messageData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setMessage("");
      setError("");
      console.log(json, "Message sent");
      dispatch({ type: "ADD_MESSAGE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <input
        placeholder={"Type your message here"}
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        required
      />
      {error && <p className="error">{error}</p>}
      <button>Send</button>
    </form>
  );
};

export default MessageForm;
