import logo from './logo.svg';
import './App.css';
import Die from './components/Die';
import React from 'react';

function App() {

  const [dice, setDice] = React.useState(allnewDice())

  function allnewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  function rollDice() {
    setDice(allnewDice())
  }

  const diceElements = dice.map(die => <Die value={die} />)

  return (
    <main className="main-container">
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-dice">Roll Dice</button>
    </main>
  );
}

export default App;
