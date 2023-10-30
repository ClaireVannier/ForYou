const CardMessages = ({ card }) => {
  return (
    <div className="card-container">
      <img className="image-container" src={card.image} alt="Bébou" />
      <p className="message-container">{card.message}</p>
    </div>
  )
}

export default CardMessages;