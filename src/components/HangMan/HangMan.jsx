import { useState } from "react"
import PropTypes from "prop-types";
import words from "./wordList.json"
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import Keyboard from "./Keyboard"



const HangMan = () => {
    const [wordToGuess, setWordToguess] = useState(() => {
        // Returns a random word
        return words[Math.floor(Math.random() * words.length)]
    })
    
    // Empty array of used letters
    const [guessedLetters, setGuessedLetters] = useState([])

    return (
         <div
            style = {{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                margin: "0 auto",
                alignItems: "center"
            }}
         >
            <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
            <HangmanDrawing />
            <HangmanWord />
            <Keyboard />

         </div>
    )


  };
  
  export default HangMan;