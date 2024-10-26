import React, { useEffect, useState } from "react";

const Heist = () => {
  const [combination, setCombination] = useState([]);
  const [userGuess, setUserGuess] = useState(["", "", "", ""]);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Generate a random combination of 4 numbers (0-9)
    const newCombination = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    setCombination(newCombination);
    console.log("Combination:", newCombination); // For debugging
  }, []);

  const handleInputChange = (index, value) => {
    const newGuess = [...userGuess];
    newGuess[index] = value;
    setUserGuess(newGuess);
  };

  const guessForm = (e) => {
    e.preventDefault();
    if (numberOfGuesses >= 10) {
      setMessage("You are busted! No more guesses allowed.");
      return;
    }

    const guess = userGuess.map(Number);
    setNumberOfGuesses(numberOfGuesses + 1);

    if (JSON.stringify(guess) === JSON.stringify(combination)) {
      setMessage("Congratulations! You cracked the combination!");
    } else if (numberOfGuesses === 9) {
      setMessage("Final guess! Good luck!");
    } else {
      setMessage("Wrong guess! Try again.");
    }
  };

  const resetGame = () => {
    setCombination([]);
    setUserGuess(["", "", "", ""]);
    setNumberOfGuesses(0);
    setMessage("");
  };

  return (
    <>
      <h1><em>HEIST!</em></h1>
      <p>Only four numbers stand between you and the payoff!</p>
      <p>If you can guess the combination in <em>10 guesses</em>, you win!</p>
      <p>If you lose, you are busted!</p>
      <div className="heistDiv">
        <div className="keypad">
          <form className="guessDisplay" onSubmit={guessForm}>
            {userGuess.map((guess, index) => (
              <input
                key={index}
                className="comboGuess"
                maxLength='1'
                value={guess}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            ))}
            <button type="submit" className="keypadButton">Enter</button>
          </form>
        </div>
        <button className="keypadButton" onClick={resetGame}>Play Again</button>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default Heist;
