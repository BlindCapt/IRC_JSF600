import { useMessagesContext } from "../hooks/useMessagesContext";
import { useEffect, useState } from "react";
import "../css/home.css";

// Components
// import ChatBox from "../components/ChatBox";
import MessageDetails from "../components/MessageDetails";
import MessageForm from "../components/MessageForm";
import PrivateMessageContainer from "../components/PrivateMessageContainer";
import ServerSideBar from "../components/ServerSideBar";

const Home = () => {
  const { messages, dispatch } = useMessagesContext();
  const [privateMessages, setPrivateMessages] = useState(null);
  const [channels, setChannels] = useState(null);
  const [activeChannel, setActiveChannel] = useState(null);

  // State for server side bar style
  const [serverSideBarClicked, setServerSideBarClicked] = useState(null);

  // Fetch messages from the server
  useEffect(() => {
    const fetchMessages = async () => {
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

  // Fetch all private messages
  // useEffect(() => {
  //   const fetchPrivateMessages = async () => {
  //     const response = await fetch(`/chat/getPrivateMessage/${1}`);
  //     const json = await response.json();

  //     if (response.ok) {
  //       try {
  //         if (!json.title === undefined) {
  //           console.log("Receive commande response");
  //         }
  //         console.log("Receive private message response");
  //         dispatch({ type: "SET_PRIVATE_MESSAGES", payload: json });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };

  //   fetchPrivateMessages();
  // }, []);

  // Get accessible channels
  useEffect(() => {
    const fetchChannels = async () => {
      const response = await fetch(
        `/chat/getChannels/${localStorage.getItem("user")}`
      );
      const json = await response.json();

      if (response.ok) {
        try {
          setChannels(json);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchChannels();
    setScrollBarToBottom();
  }, [messages]);

  // Set the scrollbar to the bottom
  const setScrollBarToBottom = () => {
    var objDiv = document.getElementById("chatBox");
    try {
      objDiv.scrollTop = objDiv.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <div className="left-div">
        {channels &&
          channels.map((channel) => (
            <div
              className={
                serverSideBarClicked === channel._id
                  ? "serverSideBarClicked serverSideBar"
                  : "serverSideBar"
              }
              onClick={() => {
                setServerSideBarClicked(channel._id);
                setActiveChannel(channel._id);
              }}
            >
              <ServerSideBar key={channel._id} data={channel} />
            </div>
          ))}
      </div>
      <div className="center-div">
        <div className="MessageBox" id="chatBox">
          {messages
            ?.slice()
            .reverse()
            .map((message) => (
              <MessageDetails
                key={message._id}
                message={message}
                activeChannel={activeChannel}
              />
            ))}
        </div>
        <div className="MessageForm">
          <MessageForm activeChannel={activeChannel} />
        </div>
      </div>
      <div className="right-div">
        {messages &&
          messages.map((mp) => (
            <PrivateMessageContainer key={mp._id} message={mp} />
          ))}
      </div>
    </div>
  );
};
export default Home;
