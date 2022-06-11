import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Contador from "./components/Contador";
import "./App.css";

const cards = [
  { src: "..//img/helmet-1.png", matched: false },
  { src: "..//img/potion-1.png", matched: false },
  { src: "..//img/ring-1.png", matched: false },
  { src: "..//img/scroll-1.png", matched: false },
  { src: "..//img/shield-1.png", matched: false },
  { src: "..//img/sword-1.png", matched: false },
];

function App() {
  let [gameCards, setgameCards] = useState([]);
  let [contagem, setcontagem] = useState(0);
  let [escolhaUm, setescolhaUm] = useState(null);
  let [escolhaDois, setEscolhaDois] = useState(null);
  let [disabled, setDisable] = useState(false);
  

  function sortedCards() {
    let sortCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));

    setgameCards(sortCards);
    setcontagem(0);
  }

  function showCard(cardChoice) {
    escolhaUm ? setEscolhaDois(cardChoice) : setescolhaUm(cardChoice);
  }

  useEffect(() => {
    
    if (escolhaUm != null && escolhaDois != null) {
      setDisable(true)
      if (escolhaDois.src === escolhaUm.src) {
        setgameCards((prevCards) => {
          return prevCards.map((cardItem) => {
            if (cardItem.src === escolhaUm.src) {
              return { ...cardItem, matched: true };
            } else {
              return cardItem;
            }
          });
        });
        reset();
      } else {
        setTimeout(() => reset(), 1000);
      }
    }
  }, [escolhaUm, escolhaDois]);

  function reset() {
    setEscolhaDois(null);
    setescolhaUm(null);
    setcontagem((cont) => ++cont);
    setDisable(false)
  }

  return (
    <main className="App">
      <h1>Magic Match</h1>
      <button onClick={sortedCards}>New Game</button>
      <section>
        <ul>
          {gameCards.map((card) => (
            <Card
              source={card}
              key={card.id}
              showCard={showCard}
              flipped={
                card === escolhaUm || card === escolhaDois || card.matched
              }
              disable ={disabled}
            />
          ))}
        </ul>
        <Contador contagem ={contagem}/>
      </section>
    </main>
  );
}

export default App;
