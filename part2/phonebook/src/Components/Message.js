const Message = ({ message }) => {
  if (message === null) {
    return null;
  }

  let messageStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginottom: 10
  };

  if (message.startsWith('Error')) {
    messageStyle = {
      ...messageStyle,
      color: 'red'
    };
  }

  return (
    <div style={messageStyle}>
      {message}
    </div>
  );
};

export default Message
;
