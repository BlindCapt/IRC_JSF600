const MessageDetails = ({ message }) => {
  return (
    <div className="message">
      {message.idUser === undefined ? (
        message.map((channel) => (
          <div key={channel._id} className="channelListElem">
            <b>{channel.title}</b>: {channel.description}{" "}
          </div>
        ))
      ) : (
        <div>
          {" "}
          (<i> {message.createdAt} </i>) <b> {message.idUser} </b> -{" "}
          {message.message}{" "}
        </div>
      )}

      {/*{message.title === undefined ? "" : "test"}*/}
    </div>
  );
};

export default MessageDetails;
