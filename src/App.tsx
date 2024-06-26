import { useState } from 'react';
import './App.css'
import { HelloWorld } from './components/HelloWorld'
import { TarotCards } from './components/TarotCard'

function App() {
  const [currentCard, setCurrentCard] = useState('');
  const Cards = ["/pages_demo/Temperance.jpg", "/pages_demo/TheLovers.jpg", "/pages_demo/TheEmpress.jpg"];
  const randomCard = () => Math.floor(Math.random() * 3);
  const generateRandomCard = () => Cards[randomCard()];

  return (
    <>
      <TarotCards cardPath={currentCard} />
      <div>
        <button onClick={() => setCurrentCard(generateRandomCard())}>Show me my Card, por favor</button>
      </div>
      <HelloWorld />
    </>
  )
}

export default App
