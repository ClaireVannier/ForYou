const NavBar = ({ messageList, messageIndex, setmessageIndex }) => {


  const handleClick = () => {
    if (messageIndex < messageList.length - 1) {
      setmessageIndex(messageIndex + 1)
    }
  }

  const lessClick = () => {
    if (messageIndex > 0) {
      setmessageIndex(messageIndex - 1)
    }
  }

  return (
    <div className="button-container">
      <button className="button" onClick={lessClick}>Pour relire encore et encore 💕</button>
      <button className="button" onClick={handleClick}>Découvre le message suivant 💘</button>
    </div>
  );

};

export default NavBar;