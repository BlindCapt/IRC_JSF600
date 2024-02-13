import { useMessagesContext } from "../hooks/useMessagesContext";
import { useEffect } from "react";
import "../css/home.css";

// Components
// import ChatBox from "../components/ChatBox";
import MessageDetails from "../components/MessageDetails";
import MessageForm from "../components/MessageForm";

const Home = () => {
  const { messages, dispatch } = useMessagesContext();
  useEffect(() => {
    const fetchMessages = async () => {
      console.log("Fetching messages");
      const response = await fetch("/chat/getMessage");
      const json = await response.json();

      if (response.ok) {
        try {
          if (!json.title === undefined) {
            console.log("Receive commande response");
          }
          console.log("Receive message response");
          dispatch({ type: "SET_MESSAGES", payload: json });
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchMessages();
  }, []); //empty array means it only runs once

  const setScrollBarToBottom = () => {
    var objDiv = document.getElementById("chatBox");
    try {
      objDiv.scrollTop = objDiv.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setScrollBarToBottom();
  }, [messages]);

  return (
    <div className="home">
      <div className="MessageBox" id="chatBox">
        {messages
          ?.slice()
          .reverse()
          .map((message) => (
            <MessageDetails key={message._id} message={message} />
          ))}
      </div>
      <div className="MessageForm">
        <MessageForm />
      </div>

      {/* <ChatBox /> */}
    </div>
  );
};
export default Home;
