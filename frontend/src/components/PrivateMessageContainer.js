const PrivateMessageContainer = ({ message }) => {
  return (
    <div className="mpContainer">
      {message.idChannel === 1 ? <h2>Private Message</h2> : ""}
    </div>
  );
};

export default PrivateMessageContainer;
