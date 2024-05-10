interface ITarotCard {
  cardPath: string;
  alt?: string;
}

const TarotCards = ({cardPath, alt}: ITarotCard) => {
  return <img height="450px" src={cardPath} alt={alt} />
}

export {TarotCards}