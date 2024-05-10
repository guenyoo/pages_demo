import { useState } from 'react';
import './App.css'
import { HelloWorld } from './components/HelloWorld'
import { TarotCard, TarotCards } from './components/TarotCard'

function App() {
  const [currentCard, setCurrentCard] = useState('');
  const Cards = ["/pages_demo/Temperance.jpg", "/pages_demo/TheLovers.jpg", "/pages_demo/TheEmpress.jpg"];
  const randomCard = () => Math.floor(Math.random() * 3);
  const generateRandomCard = () => Cards[randomCard()];

  return (
    <>
      {currentCard && <TarotCard cardPath={currentCard} />}
      <div>
        <button onClick={() => setCurrentCard(generateRandomCard())}>Show me my Card, por favor</button>
      </div>
      <HelloWorld />
      <TarotCards />
    </>
  )
}

export default App
