const MessageDetails = ({ message }) => {
  return (
    <div className="message">
      {message.idUser === undefined ? (
        console.log("commande")
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
