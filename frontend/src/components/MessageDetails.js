const MessageDetails = ({ message, activeChannel }) => {
  return (
    <div className="message">
      {message.idUser === undefined ? (
        // Case message is the collection of channels "/list"
        message.map((channel) => (
          <div key={channel._id} className="channelListElem">
            <b>{channel.title}</b>: {channel.description}{" "}
          </div>
        ))
      ) : // Check if the message is in the current active channel
      activeChannel === message.idChannel ? (
        <div>
          {" "}
          (<i> {message.createdAt} </i>) <b> {message.idUser} </b> -{" "}
          {message.message}{" "}
        </div>
      ) : (
        // place des messages server ?
        ""
      )}
      {/*{message.title === undefined ? "" : "test"}*/}
    </div>
  );
};

export default MessageDetails;
