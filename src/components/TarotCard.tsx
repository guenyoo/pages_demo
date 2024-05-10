import { useEffect, useState } from "react";
import { getTenRandomTarotCards } from "../fetchCards";

interface ITarotCard {
  cardPath: string;
  alt?: string;
}

const TarotCard = ({cardPath, alt}: ITarotCard) => {
  return <img height="450px" src={cardPath} alt={alt} />
}

const TarotCards = () => {
  const [myCards, setMyCards] = useState();
  const cardClasses = 'border rounded border-slate-200 p-10 bg-slate-50';
  const hoverClasses = 'hover:bg-indigo-400 hover:text-white hover:scale-125 transition';

  useEffect(() => {
    getTenRandomTarotCards().then(data => setMyCards(data.cards));
  }, [])

  return <ul className="grid grid-cols-3 gap-5">{myCards?.map(card => (
    <li key={card.name} className={cardClasses.concat(' ', hoverClasses)}>
      <h3 className="font-bold text-lg">{card.name}</h3>
      <p className="line-clamp-5">{card.desc}</p>
    </li>
  ))}</ul>
}

export {TarotCard, TarotCards}