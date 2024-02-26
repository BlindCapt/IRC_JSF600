const MessageDetails = ({ message, activeChannel }) => {
  const formatDateToFrenchLocale = (isoDateString) => {
    // Créer un objet Date à partir de la chaîne ISO
    const event = new Date(isoDateString);

    // Retourner la date au format DD/MM/YYYY
    return (
      event.toLocaleDateString("fr-FR", { timeZone: "UTC" }) +
      " " +
      event.toLocaleTimeString("fr-FR", { timeZone: "UTC" })
    );
  };

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
          (<i> {formatDateToFrenchLocale(message.createdAt)} </i>){" "}
          <b> {localStorage.getItem("email")} </b> - {message.message}{" "}
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
