import logo from './logo.svg';
import './App.css';
import Die from './components/Die';
import React from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [dice, setDice] = React.useState(allnewDice())

  function allnewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid()
      })
    }
    return newDice
  }

  function rollDice() {
    setDice(allnewDice())
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />)

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
