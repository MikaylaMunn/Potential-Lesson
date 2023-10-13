import React, { useState, useEffect } from "react";
import Card from "./Card";
import Confetti from "react-confetti";

const Board = ({ initialCards }) => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [solvedPairs, setSolvedPairs] = useState([]);
  const [turns, setTurns] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);

  const handleCardClick = (name, id) => {
    if (flippedCards.length < 2 && !solvedPairs.includes(name) && !isCardFlipped(id)) {
      if (flippedCards.length === 1) {
        if (flippedCards[0].name === name) {
          // If the second card matches the first, keep both flipped
          setSolvedPairs([...solvedPairs, name]);
          setTimeout(() => {
            setFlippedCards([]); // Clear flipped cards after a delay
          }, 1000);
        } else {
          // If they don't match, add the new card to the flipped cards
          setFlippedCount(2); // Set flippedCount to 2
          // Also, reset flipped cards after a delay
          setTimeout(() => {
            setFlippedCards([]);
            setFlippedCount(0); // Clear flippedCount after a delay
          }, 1000);
        }
        setTurns(turns + 1);
      } else {
        // First card is flipped, just add it to the flipped cards
        setFlippedCards([{ name, id }]);
        setFlippedCount(1); // Set flippedCount to 1
      }
    }
  };
  

  const isCardFlipped = (index) => {
    return flippedCards.some((c) => c.id === index);
  };

  const shuffleCards = (cardsToShuffle) => {
    const shuffledCards = [...cardsToShuffle];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    return shuffledCards;
  };

  useEffect(() => {
    if (Array.isArray(initialCards) && initialCards.length > 0) {
      setCards(shuffleCards(initialCards));
    }
  }, [initialCards, isGameWon]);

  useEffect(() => {
    if (flippedCount === 2) {
      if (flippedCards[0].name === flippedCards[1].name) {
        // If cards match, delay clearing flipped cards and update turns
        setTimeout(() => {
          setSolvedPairs([...solvedPairs, flippedCards[0].name]);
          setTurns(turns + 1);
          setFlippedCount(0);
          setFlippedCards([]);
        }, 1000);
      } else {
        // If cards don't match, delay clearing flipped cards
        setTimeout(() => {
          setFlippedCount(0);
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCount, flippedCards, solvedPairs, turns]);
  

  useEffect(() => {
    if (solvedPairs.length === (initialCards?.length ?? 0) / 2) {
      setIsGameWon(true);
    }
  }, [solvedPairs, initialCards]);

  return (
    <div>
      <div>
        <p>Turns: {turns}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name} // Pass the name of the card
            value={card.value}
            isFlipped={isCardFlipped(index)}
            isMatched={solvedPairs.includes(card.name)}
            onClick={() => handleCardClick(card.name, index)}
          />
        ))}
      </div>
      {isGameWon && (
        <div className="congratulations">
          <h2>Congratulations! You've won the game!</h2>
          <Confetti width={800} height={400} />
        </div>
      )}
    </div>
  );
};

export default Board;
