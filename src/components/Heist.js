import React, { useEffect, useRef, useState } from "react";

const GifMessage = () => (
  <div style={{ paddingTop: "56.250%", position: "relative" }}>
    <iframe
      src="https://gifer.com/embed/9Dvo"
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0 }}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <p>
      <a href="https://gifer.com">via GIFER</a>
    </p>
  </div>
);

const WrongGuessMessage = () => (
  <div style={{ paddingTop: "51.264%", position: "relative" }}>
    <iframe
      src="https://gifer.com/embed/6VdU"
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0 }}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <p>
      <a href="https://gifer.com">via GIFER</a>
    </p>
  </div>
);

const Heist = () => {
  const [combination, setCombination] = useState([]);
  const [userGuess, setUserGuess] = useState(["", "", "", ""]);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [message, setMessage] = useState(null);
  const [correctIndices, setCorrectIndices] = useState(new Set());
  const [inputColors, setInputColors] = useState(["", "", "", ""]);

  const inputRefs = useRef([]);
  const formRef = useRef(null);
  const [isFormFocused, setIsFormFocused] = useState(true);

  const generateCombination = () => {
    const newCombination = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    setCombination(newCombination);
    console.log("Combination:", newCombination);
  };

  useEffect(() => {
    generateCombination();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormFocused(false);
      } else {
        setIsFormFocused(true);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (index, value) => {
    if (!correctIndices.has(index)) {
      const newGuess = [...userGuess];
      newGuess[index] = value;
      setUserGuess(newGuess);

      // If input is filled, focus the next input
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const guessForm = (e) => {
    e.preventDefault();
    if (numberOfGuesses >= 10) {
      setMessage(<WrongGuessMessage />);
      return;
    }

    const guess = userGuess.map(Number);
    setNumberOfGuesses(numberOfGuesses + 1);

    let newCorrectIndices = new Set(correctIndices);
    let newInputColors = ["", "", "", ""];

    guess.forEach((num, index) => {
      if (num === combination[index]) {
        newCorrectIndices.add(index);
        newInputColors[index] = "lightgreen";
      } else {
        newInputColors[index] = "lightcoral";
      }
    });

    setCorrectIndices(newCorrectIndices);
    setInputColors(newInputColors);

    if (JSON.stringify(guess) === JSON.stringify(combination)) {
      setMessage(<GifMessage />);
    } else if (numberOfGuesses === 9) {
      setMessage("Final guess! Good luck!");
    } else {
      const guessesLeft = 10 - (numberOfGuesses + 1);
      setMessage(`Guesses left: ${guessesLeft}`);
    }

    const updatedGuess = [...userGuess];
    newCorrectIndices.forEach(index => {
      updatedGuess[index] = combination[index];
    });
    setUserGuess(updatedGuess);
  };

  const resetGame = () => {
    setUserGuess(["", "", "", ""]);
    setNumberOfGuesses(0);
    setMessage(null);
    setCorrectIndices(new Set());
    setInputColors(["", "", "", ""]);
    generateCombination(); // Regenerate combination
  };

  return (
    <>
      <h1><em>HEIST!</em></h1>
      <p>Only four numbers stand between you and the payoff!</p>
      <p>If you can guess the combination in <em>10 guesses</em>, you win! If you lose, you are busted!</p>
      <div className="heistDiv">
        {message && <div>{message}</div>}
        <div className="keypad">
          <form ref={formRef} className="guessDisplay" onSubmit={guessForm}>
            {userGuess.map((guess, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                className="comboGuess"
                maxLength='1'
                value={guess}
                onChange={(e) => handleInputChange(index, e.target.value)}
                disabled={correctIndices.has(index)}
                style={{ backgroundColor: inputColors[index] }}
                autoFocus={isFormFocused} // Keep focus if the form is focused
              />
            ))}
            <button type="submit" className="keypadButton">Enter</button>
          </form>
        </div>
        <button className="keypadButton" onClick={resetGame}>Play Again</button>
      </div>
    </>
  );
};

export default Heist;
