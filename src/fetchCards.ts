const getTenRandomTarotCards = async () => {
  try {
    const fetchedTarotCards = await fetch("https://tarotapi.dev/api/v1/cards/random?n=10");
    return fetchedTarotCards.json();
  } catch (e) {
    console.error('api falsch');
  } finally {
    console.log('finally');
  }
}

export {getTenRandomTarotCards}